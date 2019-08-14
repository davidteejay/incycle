import { connect } from 'react-redux';

import { 
  getInput,
  getUserData
} from '../modules/home'
import Home from '../components/'

const mapStateToProps = state => ({
  newSupply: state.home.newSupply,
  homeLoading: state.home.homeLoading || true,
  userData: state.home.userData
})

const mapActionCreators = {
  getInput,
  getUserData
};

export default connect(mapStateToProps, mapActionCreators)(Home);
