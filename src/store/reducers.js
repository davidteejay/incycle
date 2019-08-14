import { combineReducers } from 'redux'
import { HomeReducer as home } from '../routes/Home/modules/home'
import { Signup1Reducer as signup1 } from '../routes/Signup1/modules/signup1'
import { Signup2Reducer as signup2 } from '../routes/Signup2/modules/signup2'
import { Signup3Reducer as signup3 } from '../routes/Signup3/modules/signup3'
import { Signup4Reducer as signup4 } from '../routes/Signup4/modules/signup4'
import { CreatePinReducer as createPin } from '../routes/CreatePin/modules/createPin'
import { LoginReducer as login } from '../routes/Login/modules/login'
import { HistoryReducer as history } from '../routes/History/modules/history'

const makeRouteReducer = () => {
    return combineReducers({
        home,
        signup1,
        signup2,
        signup3,
        signup4,
        createPin,
        login,
        history
    })
}

export default makeRouteReducer;
