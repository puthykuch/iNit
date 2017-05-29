import React from 'react';
import { View } from 'native-base';
import MapView from 'react-native-maps';

import SearchBox from '../SearchBox';
import SearchResults from '../SearchResults';

import styles from './MapContainerStyles.js'

export const MapContainer = ({region, getInputLocation, toggleSearchResultModal, getAddressPredictions, resultTypes, placePredictions}) => {

	return (
		<View style = { styles.container }>
			<MapView
				provider = { MapView.PROVIDER_GOOGLE }
				style = { styles.map }
				region = { region }>
				<MapView.Marker 
					coordinate = { region }
					pinColor = 'green'
				/>
			</MapView>
			<SearchBox 
				getInputLocation = { getInputLocation } 
				toggleSearchResultModal = { toggleSearchResultModal }
				getAddressPredictions = { getAddressPredictions } />
			{ (resultTypes.pickUp || resultTypes.dropOff) &&
				<SearchResults placePredictions = { placePredictions }/>
			}
		</View>
	)
}

export default MapContainer;