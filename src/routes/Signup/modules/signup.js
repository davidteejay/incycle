import update from 'react-addons-update'
import { Actions } from 'react-native-router-flux'

import { 
	GET_SIGNUP_INPUT,
	GET_STATES,
	SELECT_STATE,
	SELECT_STATE_2,
	SELECT_STATE_3,
	GET_LGAS,
	SELECT_LGA,
	SELECT_LGA_2,
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

export function selectLga3(payload) {
	return {
		type: SELECT_LGA_3,
		payload
	}
}

export function getBanks(){
	return (dispatch, store) => {
		const banksData = banks.map(bank => {
			return bank.name
		})

		dispatch({
			type: GET_BANKS,
			payload: banksData
		})
	}
}

export function selectBank(payload){
	return {
		type: SELECT_BANK,
		payload
	}
}

export function signup(){
	return (dispatch, store) => {
		Actions.CreatePin()
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

function handleSelectLga3(state, action) {
	return update(state, {
		selectedLga3: {
			$set: action.payload
		}
	})
}

function handleGetBanks(state, action){
	return update(state, {
		banks: {
			$set: action.payload
		}
	})
}

function handleSelectBank(state, action){
	return update(state, {
		selectedBank: {
			$set: action.payload
		}
	})
}

const ACTION_HANDLERS = {
	GET_SIGNUP_INPUT: handleGetInput,
	GET_STATES: handleGetStates,
	SELECT_STATE: handleSelectState,
	SELECT_STATE_2: handleSelectState2,
	SELECT_STATE_3: handleSelectState3,
	GET_LGAS: handleGetLgas,
	SELECT_LGA: handleSelectLga,
	SELECT_LGA_2: handleSelectLga2,
	SELECT_LGA_3: handleSelectLga3,
	GET_BANKS: handleGetBanks,
	SELECT_BANK: handleSelectBank
}

const initialState = {
	name: '',
	phone: '',
	states: [],
	selectedState: '',
	selectedState2: '',
	selectedState3: '',
	lgas: [],
	selectedLga: '',
	selectedLga2: '',
	selectedLga3: '',
	address: '',
	colAddress: '',
	banks: [],
	selectedBank: '',
	accountName: '',
	accountNumber: '',
	spouseNumber: '',
	guarantorName: '',
	guarantorNumber: '',
	guarantorAddress: ''
};

export function SignupReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}
