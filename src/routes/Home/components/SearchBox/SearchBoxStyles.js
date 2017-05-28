import { Dimensions } from 'react-native';
let width = Dimensions.get('window').width;
const styles = {
  searchBox: {
    top: 60,
    position: 'absolute',
    width: width
  },
  inputWrapper: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 0,
    backgroundColor: '#fff',
    opacity: 0.9,
    borderRadius: 7 
  },
  secondInputWrapper: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 0,
    backgroundColor: '#fff',
    opacity: 0.9,
    borderRadius: 7 
  },
  inputSearch: {
    fontSize: 14 
  },
  label: {
    fontSize: 10,
    fontStyle: 'italic',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 0
  }
}

export default styles; 