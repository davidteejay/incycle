import update from 'react-addons-update';
import { AsyncStorage } from 'react-native';

//Contants
import { HOME_LOADING, HOME_INPUT, USER_DATA } from './actionContants'

//Actions
export const getInput = payload => {
    return {
        type: HOME_INPUT,
        payload
    }
}

export const getUserData = () => {
    return async (dispatch) => {
        await AsyncStorage.getItem('user')
            .then(user => {
                dispatch({
                    type: USER_DATA,
                    payload: JSON.parse(user)
                })

                dispatch({
                    type: HOME_LOADING,
                    payload: false
                })
            })
    }
}

//Action Handlers
const handleGetInput = (state, action) => {
    const { key, value } = action.payload
    
    return update(state, {
        [key]: {
            $set: value
        }
    })
}

const handleGetUserData = (state, action) => (
    update(state, {
        userData: {
            $set: action.payload
        }
    })
)

const handleHomeLoading = (state, action) => {
    return update(state, {
        homeLoading: {
            $set: action.payload
        }
    })
}

const ACTION_HANDLERS = {
    HOME_INPUT: handleGetInput,
    HOME_LOADING: handleHomeLoading,
    USER_DATA: handleGetUserData
}

const initialState = {
    newSupply: '',
    homeLoading: true,
    userData: null
};

export function HomeReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}
