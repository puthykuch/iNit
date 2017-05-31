import React from 'react';
import { Text } from 'react-native';
import { View } from 'native-base';

import styles from './FareStyles.js'

export const Fare = ({fare}) => {
	return (
		<View style={styles.fareContainer}>
			<Text>
				<Text style={styles.fareText}>FARE: </Text><Text style={styles.amountText}>{fare} Riel</Text>
			</Text>
		</View>
	)
}

export default Fare;