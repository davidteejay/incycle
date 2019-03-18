import { connect } from 'react-redux';

import {
	getInput,
} from '../modules/createPin';
import CreatePin from '../components/';

const mapStateToProps = (state) => ({
	name: state.signup.name,
	phone: state.signup.phone,
	pin1: state.createPin.pin1,
	pin2: state.createPin.pin2,
	pin3: state.createPin.pin3,
	pin4: state.createPin.pin4,
})

const mapActionCreators = {
	getInput,
};

export default connect(mapStateToProps, mapActionCreators)(CreatePin);
