import update from 'react-addons-update';

//Contants



//Actions


//Action Handlers


const ACTION_HANDLERS = {
    
}

const initialState = {

};

export function HomeReducer (state = initialState, action){
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}
