import { ColorScheme } from '../../../../app-config';

const styles = {
  fabContainer: { 
    borderColor: '#FFF',
    borderWidth: 2,
    height: 80,
    width: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 65,
    right: 10,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  disabledState: {
    backgroundColor: '#D7D7D7'
  },
  activeState: {
    backgroundColor: ColorScheme.primaryDark
  },
  btnText: {
    fontSize: 16,
    color: '#fff'
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 12
  }
}

export default styles; 