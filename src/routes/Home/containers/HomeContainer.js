import { connect } from 'react-redux';
import Home from '../components/Home';

import {
    getCurrentLocation,
    getInputLocation,
    toggleSearchResultModal,
    getAddressPredictions
} from '../modules/home';

const mapStateToProps = (state) => ({
    region: state.home.region,
    inputLocation: state.home.inputLocation || {},
    resultTypes: state.home.resultTypes || {},
    placePredictions: state.home.placePredictions || []
});

const actionCreator = {
    getCurrentLocation,
    getInputLocation,
    toggleSearchResultModal,
    getAddressPredictions
};

export default connect(mapStateToProps, actionCreator)(Home)
