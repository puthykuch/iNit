import update from 'react-addons-update';
import constants from './actionConstants';
import { Dimensions } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';

import request from '../../../util/request';

const { width, height } = Dimensions.get('window');

const ASPECT_RATION = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATION * LATITUDE_DELTA;

// ----------------------
// Constants
// ----------------------
const { 
	GET_CURRENT_LOCATION, 
	GET_INPUT_LOCATION, 
	TOGGLE_SEARCH_RESULT,
	GET_ADDRESS_PREDICTIONS,
	GET_SELECTED_ADDRESS,
	GET_DISTANCE_MATRIX 
} = constants;


// ---------------------
// Actions 
// ---------------------
export function getCurrentLocation() {
	return (dispatch) => {
		navigator.geolocation.getCurrentPosition((position) => {
			dispatch({
				type: GET_CURRENT_LOCATION,
				payload: position
			});
		},
		(error) => console.log(error.message),
		{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		)
	}
}

export function getInputLocation(payload) {
	return {
		type: GET_INPUT_LOCATION,
		payload
	}
}

export function toggleSearchResultModal(payload) {
	return {
		type: TOGGLE_SEARCH_RESULT,
		payload
	}
}	

export function getAddressPredictions() {
	return(dispatch, store)=>{
		let userInput = store().home.resultTypes.pickUp ? store().home.inputLocation.pickUp : store().home.inputLocation.dropOff;
		RNGooglePlaces.getAutocompletePredictions(userInput,
			{
				country: 'KH'
			}
		)
		.then((results)=>
			dispatch({
				type: GET_ADDRESS_PREDICTIONS,
				payload: results
			})
		)
		.catch((error)=> console.log(error.message));
	};
}

export function getSelectedAddress(placeId) {
	return (dispatch, store) => {
		RNGooglePlaces.lookUpPlaceByID(placeId)
		.then((results) => {
			dispatch({
				type: GET_SELECTED_ADDRESS,
				payload: results
			})
		})
		.then(() => {
			if ( store().home.selectedAdress.selectedPickUp && store().home.selectedAdress.selectedDropOff ) {
				request.get('https//maps.googleapis.com/maps/api/distancematrix/json')
				.query({
					origins: store().home.selectedAdress.selectedPickUp.latitude + ',' + store().home.selectedAdress.selectedPickUp.longitude,
					destinations: store().home.selectedAdress.selectedDropOff.latitude + ',' + store().home.selectedAdress.selectedDropOff.longitude,
					mode: 'driving',
					key: 'AIzaSyCWZBCRCv18Q82uJapw_Qdwxuk0sCa-upM'
				})
				.finish((error, res) => {
					dispatch({
						type: GET_DISTANCE_MATRIX,
						payload: res.body
					})
				})
			}
		})
		.catch((error) => console.log(error.message));
	}
}

// ---------------------
// Actions Handlers
// ---------------------
function getCurrentLocationHandler(state, action) {
	return update(state, {
		region: {
			latitude: {
				$set: action.payload.coords.latitude
			},
			longitude: {
				$set: action.payload.coords.longitude
			},
			latitudeDelta: {
				$set: LATITUDE_DELTA
			},
			longitudeDelta: {
				$set: LONGITUDE_DELTA
			}
		}
	})
}

function getInputLocationHandler(state, action) {
	const { key, value } = action.payload;
	return update(state, {
		 inputLocation: {
			 [key]: {
				 $set: value
			 }
		 }
	})
}

function toggleSearchResultModalHandler(state, action) {
	if (action.payload === 'pickUp') {
		return update(state, {
			resultTypes: {
				pickUp: {
					$set: true
				},
				dropOff: {
					$set: false
				}
			},
			placePredictions: {
				$set: {} 
			}
		})
	}
	if (action.payload === 'dropOff') {
		return update(state, {
			resultTypes: {
				pickUp: {
					$set: false
				},
				dropOff: {
					$set: true
				}
			},
			placePredictions: {
				$set: {} 
			}
		})
	}
}

function getAddressPredictionsHandler(state, action) {
	return update(state, {
		placePredictions: {
			$set: action.payload
		}
	})
}

function getSelectedAddressHandler(state, action) {
	let selectedTitle = state.resultTypes.pickUp ? 'selectedPickUp' : 'selectedDropOff'
	return update(state, {
		selectedAdress: {
			[selectedTitle]: {
				$set: action.payload
			}
		}, 
		resultTypes: {
			pickUp: {
				$set: false
			},
			DropOff: {
				$set: false
			}
		}
	})
}

function getDistanceMatrixHandler(state, action) {
	return update(state, {
		distaneMatrix: {
			$set: action.payload
		}
	})
}

// ---------------------
// Map Actions to ActionHandlers
// ---------------------
const ACTION_HANDLERS = {
	GET_CURRENT_LOCATION: getCurrentLocationHandler,
	GET_INPUT_LOCATION: getInputLocationHandler,
	TOGGLE_SEARCH_RESULT: toggleSearchResultModalHandler,
	GET_ADDRESS_PREDICTIONS: getAddressPredictionsHandler,
	GET_SELECTED_ADDRESS : getSelectedAddressHandler,
	GET_DISTANCE_MATRIX: getDistanceMatrixHandler
}

const initialState = {
	region: {},
	inputLocation: {},
	resultTypes:{},
	selectedAdress: {}
};

export function HomeReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}
