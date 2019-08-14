import { connect } from 'react-redux';

import {
  
} from '../modules/history'
import History from '../components/'

const mapStateToProps = state => ({
  historyLoading: state.history.historyLoading
})

const mapActionCreators = {
  
};

export default connect(mapStateToProps, mapActionCreators)(History);
