import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import NavBar from './navbar';

const MSTP = state => ({
    loggedIn: state.session.isAuthenticated
});

export default connect(MSTP, {logout})(NavBar);