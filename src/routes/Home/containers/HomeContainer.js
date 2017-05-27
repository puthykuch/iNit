import { connect } from 'react-redux';
import Home from '../components/Home';
import {
    setName
} from '../modules/home';

const mapStateToProps = (state) => ({
    name: state.home.name
});

const mapActionToProps = {
    setName
};

export default connect(mapStateToProps, mapActionToProps)(Home)
