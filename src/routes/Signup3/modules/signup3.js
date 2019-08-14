import update from 'react-addons-update'
import { Actions } from 'react-native-router-flux'

import { 
	GET_SIGNUP_INPUT,
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

//Action Handlers
function handleGetInput(state, action){
	const { key, value } = action.payload
	return update(state, {
		[key]: {
			$set: value
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
	GET_BANKS: handleGetBanks,
	SELECT_BANK: handleSelectBank
}

const initialState = {
	banks: [],
	selectedBank: 'Guarantee Trust Bank',
	accountName: 'Chibuokem Onyekwelu',
	accountNumber: '0167550036',
	spouseNumber: '08060994494',
	bvn: '234567890'
};

export function Signup3Reducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}
