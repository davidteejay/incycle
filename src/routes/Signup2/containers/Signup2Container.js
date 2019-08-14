import { connect } from 'react-redux'

import { 
  getInput,
  getStates,
  selectState,
  selectState2,
  selectLga,
  selectLga2,
} from '../modules/signup2'
import Signup from '../components/'

const mapStateToProps = (state) => ({
  states: state.signup2.states,
  selectedState: state.signup2.selectedState,
  selectedState2: state.signup2.selectedState2,
  lgas: state.signup2.lgas,
  selectedLga: state.signup2.selectedLga,
  selectedLga2: state.signup2.selectedLga2,
  address: state.signup2.address,
  colAddress: state.signup2.colAddress,
})

const mapActionCreators = {
  getInput,
  getStates,
  selectState,
  selectState2,
  selectLga,
  selectLga2,
};

export default connect(mapStateToProps, mapActionCreators)(Signup);
