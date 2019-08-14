import update from 'react-addons-update'
import { Actions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'
import axios from 'axios'

import {
	GET_CREATEPIN_INPUT,
	CREATE_LOADING
} from './actionConstants'
import { API_URL } from '../../../config/constants'


//Actions
export function getInput(payload) {
	return {
		type: GET_CREATEPIN_INPUT,
		payload
	}
}

export function signup(){
	return (dispatch, store) => {
		dispatch({
			type: CREATE_LOADING,
			payload: true
		})

		const { signup1, signup2, signup3, signup4, createPin } = store()
		let name = signup1.name.split(' ')
		let guarantorName = signup4.guarantorName.split(' ')
		
		const data = {
			"FirstName": name[0],
			"MiddleName": name.length === 3 ? name[1] : '',
			"LastName": name.length > 1 ? name[name.length - 1] : '',
			"PhoneNumber": signup1.phone,
			"AddressLine1": signup2.address,
			"LocalGovernmentArea": signup2.selectedLga,
			"State": signup2.selectedState,
			"CollectionAddressLine1": signup2.colAddress,
			"CollectionAddressLga": signup2.selectedLga2,
			"CollectionState": signup2.selectedState2,
			"BankCode": signup3.selectedBank,
			"BankAccountNumber": signup3.accountNumber,
			"Bvn": signup3.bvn,
			"SpousePhoneNumber": signup3.spouseNumber,
			"RegistrationDate": new Date().toISOString(),
			"Username": signup1.phone,
			"Password": `${createPin.pin1}${createPin.pin2}${createPin.pin3}${createPin.pin4}`,
			"Guarantors": [
				{
					"FirstName": guarantorName[0],
					"MiddleName": guarantorName.length === 3 ? guarantorName[1] : '',
					"LastName": guarantorName.length > 1 ? guarantorName[guarantorName.length - 1] : '',
					"PhoneNumber": signup4.guarantorNumber,
					"HomeAddressLine1": signup4.guarantorAddress,
					"LocalGovernmentArea": signup4.selectedLga3,
					"State": signup4.selectedState3,
				}
			],
		}

		axios
			.post(`${API_URL}/Users`, data)
			.then(async res => {
				console.warn(res.data)
				await AsyncStorage.setItem('user', JSON.stringify(res.data))
				Actions.Main()
			})
			.catch(err => {
				console.warn(err.response)
				alert('Something went wrong. Please try again later')
			})
			.finally(() => dispatch({
				type: CREATE_LOADING,
				payload: false
			}))
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

const handleCreateLoading = (state, action) => (
	update(state, {
		createLoading: {
			$set: action.payload
		}
	})
)

const ACTION_HANDLERS = {
	GET_CREATEPIN_INPUT: handleGetInput,
	CREATE_LOADING: handleCreateLoading
}

const initialState = {
	name: '',
	phone: '',
	pin1: '7',
	pin2: '2',
	pin3: '1',
	pin4: '0',
	createLoading: false
};

export function CreatePinReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state
}
