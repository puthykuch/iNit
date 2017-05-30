import React from 'react';
import { Text } from 'react-native';
import { Header, Left, Body, Right, Button } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'; 

import { ColorScheme } from '../../app-config';

import styles from './ContainerHeaderStyles';

export const ContainerHeader = () => {
  return (
    <Header style={{backgroundColor: ColorScheme.primaryDark }} iosBarStyle='light-content' androidStatusBarColor='#FFF'>
      <Left>
        <Button transparent>
          <Icon name='bars' style={styles.icon} />
        </Button>
      </Left>
      <Body>
        <Icon name='superpowers' style={styles.iconLogo} />
      </Body>
      <Right>
        <Button transparent>
          <Icon name='sliders' style={styles.icon} />
        </Button>
      </Right>
    </Header>
  )
}

export default ContainerHeader;
