import { connect } from 'react-redux'

import { 
  getInput,
  getStates,
  selectState3,
  selectLga3
} from '../modules/signup4'
import Signup from '../components/'

const mapStateToProps = (state) => ({
  states: state.signup4.states,
  selectedState3: state.signup4.selectedState3,
  lgas: state.signup4.lgas,
  selectedLga3: state.signup4.selectedLga3,
  guarantorName: state.signup4.guarantorName,
  guarantorNumber: state.signup4.guarantorNumber,
  guarantorAddress: state.signup4.guarantorAddress
})

const mapActionCreators = {
  getInput,
  getStates,
  selectState3,
  selectLga3
};

export default connect(mapStateToProps, mapActionCreators)(Signup);
