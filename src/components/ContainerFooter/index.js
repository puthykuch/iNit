import React from 'react';
import { Text, Image } from 'react-native';
import { FooterTab, Button, Footer } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'; 

import { ColorScheme } from '../../app-config';

import styles from './ContainerFooterStyles';

const tuktuk_primary = require('../../assets/imgs/tuk_tuk_primary.png');
const tuktuk_unselect = require('../../assets/imgs/tuk_tuk_unselect.png');

export const ContainerFooter = () => {

  // tab bar items
  const tabs = [
    {
      title: 'MOTO',
      subTitle: '',
      icon: 'motorcycle' 
    },
    {
      title: 'TUKTUK',
      subTitle: '',
      icon: 'question-circle' 
    },
    {
      title: 'CAR',
      subTitle: '',
      icon: 'car' 
    },
    {
      title: 'VAN',
      subTitle: '',
      icon: 'bus' 
    }
  ];

  return (
    <Footer>
      <FooterTab style={ styles.footerContainer }>
        {
          tabs.map( (tab, index) => (
            <Button key={index}>
              { (tab.title !== 'TUKTUK') ?
                <Icon size={20} style={{color: (index === 0) ? ColorScheme.primaryDark : ColorScheme.tabUnselect}} name={tab.icon} />
              :
                <Image source={ (index === 0) ?  tuktuk_primary : tuktuk_unselect } style = {{width: 20, height: 20}} />
              }
              <Text style={{fontSize: 12, color: (index === 0) ? ColorScheme.primaryDark : ColorScheme.tabUnselect }}> { tab.title } </Text>
              {/*<Text style={styles.subTitle}> { tab.subTitle } </Text>*/}
            </Button>
          ))
        }
      </FooterTab>
    </Footer>
  )
}

export default ContainerFooter;
