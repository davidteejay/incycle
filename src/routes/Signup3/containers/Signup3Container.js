import { connect } from 'react-redux'

import { 
  getInput,
  getBanks,
  selectBank,
} from '../modules/signup3'
import Signup from '../components/'

const mapStateToProps = (state) => ({
  banks: state.signup3.banks,
  selectedBank: state.signup3.selectedBank,
  accountName: state.signup3.accountName,
  accountNumber: state.signup3.accountNumber,
  spouseNumber: state.signup3.spouseNumber,
  bvn: state.signup3.bvn,
})

const mapActionCreators = {
  getInput,
  getBanks,
  selectBank,
};

export default connect(mapStateToProps, mapActionCreators)(Signup);
