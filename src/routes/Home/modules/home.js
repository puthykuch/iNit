import update from 'react-addons-update';
import constants from './actionConstants';
import { Dimensions } from 'react-native';
import { RNGooglePlaces } from 'react-native-google-places';

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
	TOGGLE_SEARCH_RESULT 
} = constants;


// ---------------------
// Actions 
// ---------------------
export function getCurrentLocation() {
	return (dispatch) => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
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
			}
		})
	}
}

// ---------------------
// Map Actions to ActionHandlers
// ---------------------
const ACTION_HANDLERS = {
	GET_CURRENT_LOCATION: getCurrentLocationHandler,
	GET_INPUT_LOCATION: getInputLocationHandler,
	TOGGLE_SEARCH_RESULT: toggleSearchResultModalHandler
}

const initialState = {
	region: {},
	inputLocation: {},
	resultTypes: {}
};

export function HomeReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}
