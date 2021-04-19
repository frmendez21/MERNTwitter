import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const MSTP = state => ({
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  });


const MDTP = dispatch => ({
    signup: user => dispatch(signup(user))
  });


export default connect(MSTP, MDTP)(SignupForm);