import React, { Component } from 'react';

import { Container } from 'native-base';
 
import MapContainer from './MapContainer'; 
import ContainerHeader from '../../../components/ContainerHeader';
import ContainerFooter from '../../../components/ContainerFooter'; 
import Fare from './Fare'; 
import Fab from './Fab'; 

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class Home extends Component {

  componentDidMount() {
    this.props.getCurrentLocation();
  }

  render() {
    const region = {
      latitude: 11.593254,
      longitude: 104.882627,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
    
    return (
      <Container>
        <ContainerHeader />
        { this.props.region.latitude ?
          <MapContainer 
            region={this.props.region} 
            getInputLocation={this.props.getInputLocation}
            toggleSearchResultModal={this.props.toggleSearchResultModal}
            getAddressPredictions={this.props.getAddressPredictions}
            resultTypes={this.props.resultTypes}
            placePredictions={this.props.placePredictions}
            selectedAdress={this.props.selectedAdress}
            getSelectedAddress={this.props.getSelectedAddress}
          />
          :
          <View style={{flex: 1, backgroundColor: '#eee'}}/>
        }
        {
          this.props.fare && 
          <Fare fare={this.props.fare}/>
        }
        {
          this.props.fare && 
           <Fab />
        }
        <ContainerFooter />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default Home;
