import { connect } from 'react-redux'

import { 
  getInput,
  getStates,
  selectState,
  selectState2,
  selectState3,
  selectLga,
  selectLga2,
  selectLga3,
  getBanks,
  selectBank,
  signup
} from '../modules/signup'
import Signup from '../components/'

const mapStateToProps = (state) => ({
  name: state.signup.name,
  phone: state.signup.phone,
  states: state.signup.states,
  selectedState: state.signup.selectedState,
  selectedState2: state.signup.selectedState2,
  selectedState3: state.signup.selectedState3,
  lgas: state.signup.lgas,
  selectedLga: state.signup.selectedLga,
  selectedLga2: state.signup.selectedLga2,
  selectedLga3: state.signup.selectedLga3,
  address: state.signup.address,
  colAddress: state.signup.colAddress,
  banks: state.signup.banks,
  selectedBank: state.signup.selectedBank,
  accountName: state.signup.accountName,
  accountNumber: state.signup.accountNumber,
  spouseNumber: state.signup.spouseNumber,
  guarantorName: state.signup.guarantorName,
  guarantorNumber: state.signup.guarantorNumber,
  guarantorAddress: state.signup.guarantorAddress
})

const mapActionCreators = {
  getInput,
  getStates,
  selectState,
  selectState2,
  selectState3,
  selectLga,
  selectLga2,
  selectLga3,
  getBanks,
  selectBank,
  signup
};

export default connect(mapStateToProps, mapActionCreators)(Signup);
