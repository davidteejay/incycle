import { combineReducers } from 'redux'
import { HomeReducer as home } from '../routes/Home/modules/home'
import { SignupReducer as signup } from '../routes/Signup/modules/signup'
import { CreatePinReducer as createPin } from '../routes/CreatePin/modules/createPin'

const makeRouteReducer = () => {
    return combineReducers({
        home,
        signup,
        createPin
    })
}

export default makeRouteReducer;
