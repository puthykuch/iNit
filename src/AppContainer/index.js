import React, { Component, propTypes } from 'react';
import { Router } from 'react-native-router-flux';

import { Provider } from 'react-redux';

export default class AppContainer extends Component {
  
  static propTypes = {
    store: propTypes.object.isRequired;
  }
  
  render() {
    return (
      <Provider store={this.props.store}>
        
      </Provider>
    )
  }
  
}
  
  
  
  