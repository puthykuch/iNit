import { Dimensions } from 'react-native';
let width = Dimensions.get('window').width;

const styles = {
	fareContainer: {
		width: width,
		height: 40,
		padding: 15,
		backgroundColor: 'grey'
	},
	fareText: {
		fontSize: 12,
		color: '#FFF'
	},
	amountText: {
		fontWeight: 'bold',
		fontSize: 12,
		color: '#FFF'
	},
}

export default styles;