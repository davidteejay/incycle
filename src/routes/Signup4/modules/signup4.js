import update from 'react-addons-update'
import { Actions } from 'react-native-router-flux'

import { 
	GET_SIGNUP_INPUT,
	GET_STATES,
	SELECT_STATE_3,
	GET_LGAS,
	SELECT_LGA_3,
	GET_BANKS,
	SELECT_BANK
} from './actionConstants'
import states from '../../../util/states'
import banks from '../../../util/banks'

//Actions
export function getInput(payload){
	return {
		type: GET_SIGNUP_INPUT,
		payload
	}
}

export function getStates(){
	return (dispatch, store) => {
		const statesData = states.map(state => {
			return state.state.name
		})

		dispatch({
			type: GET_STATES,
			payload: statesData
		})
	}
}


export function selectState3(payload) {
	return (dispatch, store) => {
		dispatch({
			type: SELECT_STATE_3,
			payload
		})

		const statesData = states.filter(state => {
			return state.state.name === payload
		})

		const lgasData = statesData.map(state => {
			return state.state.locals
		})

		dispatch({
			type: GET_LGAS,
			payload: lgasData[0]
		})
	}
}

export function selectLga3(payload) {
	return {
		type: SELECT_LGA_3,
		payload
	}
}

//Action Handlers
function handleGetInput(state, action){
	const { key, value } = action.payload
	return update(state, {
		[key]: {
			$set: value
		}
	})
}

function handleGetStates(state, action){
	return update(state, {
		states: {
			$set: action.payload
		}
	})
}

function handleSelectState3(state, action) {
	return update(state, {
		selectedState3: {
			$set: action.payload
		}
	})
}

function handleGetLgas(state, action){
	return update(state, {
		lgas: {
			$set: action.payload
		}
	})
}

function handleSelectLga3(state, action) {
	return update(state, {
		selectedLga3: {
			$set: action.payload
		}
	})
}

const ACTION_HANDLERS = {
	GET_SIGNUP_INPUT: handleGetInput,
	GET_STATES: handleGetStates,
	SELECT_STATE_3: handleSelectState3,
	GET_LGAS: handleGetLgas,
	SELECT_LGA_3: handleSelectLga3
}

const initialState = {
	states: [],
	selectedState3: 'Ondo State',
	lgas: [],
	selectedLga3: 'Akure North',
	guarantorName: 'Bukky',
	guarantorNumber: '08060994494',
	guarantorAddress: 'Omoniyi Estate'
};

export function Signup4Reducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}
