import { connect } from 'react-redux'

import { 
  getInput,
  checkPhone
} from '../modules/signup1'
import Signup from '../components/'

const mapStateToProps = (state) => ({
  name: state.signup1.name,
  phone: state.signup1.phone,
  loading: state.signup1.loading
})

const mapActionCreators = {
  getInput,
  checkPhone,
};

export default connect(mapStateToProps, mapActionCreators)(Signup);
