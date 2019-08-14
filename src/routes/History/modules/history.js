import update from 'react-addons-update';

//Contants
import { HISTORY_LOADING } from './actionConstants'

//Actions


//Action Handlers
const handleHistoryLoading = (state, action) => {
  return update(state, {
    historyLoading: {
      $set: action.payload
    }
  })
}

const ACTION_HANDLERS = {
  HISTORY_LOADING: handleHistoryLoading
}

const initialState = {
  historyLoading: false
};

export function HistoryReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state
}
