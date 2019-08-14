import update from 'react-addons-update'
import { Actions } from 'react-native-router-flux'

import { 
	GET_SIGNUP_INPUT,
	GET_STATES,
	SELECT_STATE,
	SELECT_STATE_2,
	GET_LGAS,
	SELECT_LGA,
	SELECT_LGA_2
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

export function selectState(payload){
	return (dispatch, store) => {
		dispatch({
			type: SELECT_STATE,
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

export function selectState2(payload){
	return (dispatch, store) => {
		dispatch({
			type: SELECT_STATE_2,
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

export function selectLga(payload){
	return {
		type: SELECT_LGA,
		payload
	}
}

export function selectLga2(payload){
	return {
		type: SELECT_LGA_2,
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

function handleSelectState(state, action){
	return update(state, {
		selectedState: {
			$set: action.payload
		}
	})
}

function handleSelectState2(state, action){
	return update(state, {
		selectedState2: {
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

function handleSelectLga(state, action){
	return update(state, {
		selectedLga: {
			$set: action.payload
		}
	})
}

function handleSelectLga2(state, action){
	return update(state, {
		selectedLga2: {
			$set: action.payload
		}
	})
}

const ACTION_HANDLERS = {
	GET_SIGNUP_INPUT: handleGetInput,
	GET_STATES: handleGetStates,
	SELECT_STATE: handleSelectState,
	SELECT_STATE_2: handleSelectState2,
	GET_LGAS: handleGetLgas,
	SELECT_LGA: handleSelectLga,
	SELECT_LGA_2: handleSelectLga2,
}

const initialState = {
	states: [],
	selectedState: 'Ondo State',
	selectedState2: 'Ondo State',
	lgas: [],
	selectedLga: 'Akure North',
	selectedLga2: 'Akure South',
	address: 'Omoniyi Estate',
	colAddress: 'FUTA',
};

export function Signup2Reducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}
