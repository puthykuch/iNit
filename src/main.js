import React from 'react';

export default class Root extends Component {
  
  renderApp() {
    const initialState = window.__INITAIL__STATE__;
    const store = createStore(initialState);
  }
  
  render() {
    return (

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});