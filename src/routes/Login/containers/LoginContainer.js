import { connect } from 'react-redux';

import {
	getInput,
	login
} from '../modules/login';
import Login from '../components/';

const mapStateToProps = (state) => ({
	phone: state.login.phone,
	pin1: state.login.pin1,
	pin2: state.login.pin2,
	pin3: state.login.pin3,
	pin4: state.login.pin4,
})

const mapActionCreators = {
	getInput,
	login
};

export default connect(mapStateToProps, mapActionCreators)(Login);
