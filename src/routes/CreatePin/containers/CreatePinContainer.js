import { connect } from 'react-redux';

import {
	getInput,
	signup
} from '../modules/createPin';
import CreatePin from '../components/';

const mapStateToProps = (state) => ({
	name: state.signup1.name,
	phone: state.signup1.phone,
	pin1: state.createPin.pin1,
	pin2: state.createPin.pin2,
	pin3: state.createPin.pin3,
	pin4: state.createPin.pin4,
	createLoading: state.createPin.createLoading
})

const mapActionCreators = {
	getInput,
	signup
};

export default connect(mapStateToProps, mapActionCreators)(CreatePin);
