import { connect } from 'react-redux';
import Home from '../components/Home';
import {
    getCurrentLocation,
    getInputLocation,
    toggleSearchResultModal
} from '../modules/home';

const mapStateToProps = (state) => ({
    region: state.home.region,
    inputLocation: state.home.inputLocation || {},
    resultTypes: state.home.resultTypes || {}
});

const mapActionToProps = {
    getCurrentLocation,
    getInputLocation,
    toggleSearchResultModal
};

export default connect(mapStateToProps, mapActionToProps)(Home)
