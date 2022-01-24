const INITIAL_STATE = {darkMode: false};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'SET_THEME_DARK':
            return{
                ...state,
                darkMode: !state.darkMode
            }
        default:
            return state
    }
}