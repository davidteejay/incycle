import update from 'react-addons-update'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'

import { API_URL } from '../../../config/constants'
import { 
	GET_SIGNUP_INPUT,
	SIGNUP_LOADING
} from './actionConstants'

//Actions
export function getInput(payload){
	return {
		type: GET_SIGNUP_INPUT,
		payload
	}
}

export function checkPhone(){
	return (dispatch, store) => {
		dispatch({
			type: SIGNUP_LOADING,
			payload: true
		})

		const { phone } = store().signup1

		axios
			.get(`${API_URL}/Users/GetByPhoneNumber/${phone}`)
			.then(res => {
				alert('Phone Number has already been registered')
			})
			.catch(err => {
				console.warn(err.response)
				const { response: { status }} = err
				if (status !== 404) {
					alert('Phone Number has already been registered')
				} else {
					Actions.Signup2()
				}
			})
			.finally(() => dispatch({
				type: SIGNUP_LOADING,
				payload: false
			}))
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

function handleSignupLoading(state, action){
	return update(state, {
		loading: {
			$set: action.payload
		}
	})
}

const ACTION_HANDLERS = {
	GET_SIGNUP_INPUT: handleGetInput,
	SIGNUP_LOADING: handleSignupLoading
}

const initialState = {
	name: 'Chibuokem Onyekwelu',
	phone: '07038125957',
	loading: false
};

export function Signup1Reducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}
