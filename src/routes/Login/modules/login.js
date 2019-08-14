import update from 'react-addons-update'
import { Actions } from 'react-native-router-flux'

import {
	GET_LOGIN_INPUT
} from './actionConstants'


//Actions
export function getInput(payload) {
	return {
		type: GET_LOGIN_INPUT,
		payload
	}
}

export function login() {
	return (dispatch, store) => {
		Actions.Main()
	}
}

//Action Handlers
function handleGetInput(state, action) {
	const { key, value } = action.payload
	return update(state, {
		[key]: {
			$set: value
		}
	})
}

const ACTION_HANDLERS = {
	GET_LOGIN_INPUT: handleGetInput
}

const initialState = {
	phone: '',
	pin1: '',
	pin2: '',
	pin3: '',
	pin4: '',
};

export function LoginReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state
}
