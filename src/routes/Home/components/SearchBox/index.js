import React from 'react';
import { Text } from 'react-native';
import { View, InputGroup, Input } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './SearchBoxStyles.js'

export const SearchBox = ({getInputLocation, toggleSearchResultModal, getAddressPredictions}) => {

  function handleInput(key, val) {
    getInputLocation({
      key,
      value: val,
    });
    getAddressPredictions();
  }

  function handleFocus() {
    toggleSearchResultModal('pickUp');
    getAddressPredictions();
  }

	return (
		<View style={ styles.searchBox }>
      <View style={ styles.inputWrapper }>
        <Text style={ styles.label } > PICK UP </Text>
        <InputGroup>
          <Icon name='search' size={15} color='#FF5E3A' />
          <Input onFocus={ handleFocus.bind(this) } style={ styles.inputSearch } placeholder='Choose pick-up location' onChangeText={ handleInput.bind(this, 'pickUp') } />
        </InputGroup>
      </View>
      <View style={ styles.secondInputWrapper }>
        <Text style={ styles.label } > DROP OFF </Text>
        <InputGroup>
          <Icon name='search' size={15} color='#FF5E3A' />
          <Input onFocus={ handleFocus.bind(this) } style={ styles.inputSearch } placeholder='Choose drop-off location' onChangeText={ handleInput.bind(this, 'dropOff') } />
        </InputGroup>
      </View>
		</View>
	)
}

export default SearchBox;