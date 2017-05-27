import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class Home extends Component {

  componentDidMount() {
    this.props.setName();
  }

  render() {
    return (
      <View style={styles.container}>
      	<Text> Hello { this.props.name } </Text>
      </View>
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
