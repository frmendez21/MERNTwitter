import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const MSTP = state => ({
    errors: state.errors.session
});

const MDTP = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect(MSTP, MDTP)(LoginForm);