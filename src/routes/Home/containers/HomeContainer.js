import { connect } from 'react-redux';
import Home from '../components/Home';

import {
    getCurrentLocation,
    getInputLocation,
    toggleSearchResultModal,
    getAddressPredictions,
    getSelectedAddress
} from '../modules/home';

const mapStateToProps = (state) => ({
    region: state.home.region,
    inputLocation: state.home.inputLocation || {},
    resultTypes: state.home.resultTypes || {},
    placePredictions: state.home.placePredictions || [],
    selectedAdress: state.home.selectedAdress || {},
    fare: state.home.fare,
    OkToGo: state.home.OkToGo
});

const actionCreator = {
    getCurrentLocation,
    getInputLocation,
    toggleSearchResultModal,
    getAddressPredictions,
    getSelectedAddress
};

export default connect(mapStateToProps, actionCreator)(Home)
