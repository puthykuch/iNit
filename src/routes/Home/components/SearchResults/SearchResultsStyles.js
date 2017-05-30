import { Dimensions } from 'react-native';

let width = Dimensions.get('window').width;

const styles = {
  searchResultsWrapper: {
    top: 170,
    position: 'absolute',
    width: width - 25,
    height: 1000,
    backgroundColor: '#fff',
    borderTopLeftRadius: 7, 
    borderTopRightRadius: 7, 
    opacity: 0.9
  },
  primaryText: {
    fontWeight: 'bold',
    color: '#373737'
  },
  secondaryText: {
    fontStyle: 'italic',
    color: '#7D7D7D'
  },
  leftContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderLeftColor: '#7D7D7D'
  },
  leftIcon: {
    fontSize: 20,
    color: '#7D7D7D'
  },
  distance: {
    fontSize: 12 
  }
}

export default styles; 