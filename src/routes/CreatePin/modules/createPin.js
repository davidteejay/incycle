import update from 'react-addons-update';

import {
	GET_CREATEPIN_INPUT
} from './actionConstants'


//Actions
export function getInput(payload) {
	return {
		type: GET_CREATEPIN_INPUT,
		payload
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
	GET_CREATEPIN_INPUT: handleGetInput
}

const initialState = {
	name: '',
	phone: '',
	pin1: '',
	pin2: '',
	pin3: '',
	pin4: '',
};

export function CreatePinReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state
}
