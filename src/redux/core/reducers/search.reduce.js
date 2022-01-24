
const INITIAL_STATE = {
    loading: false,
    searchTerm: null,
    error: null,
    results: []
}

export default function(state = INITIAL_STATE, action){

    switch(action.type){
        case 'GET_RESULTS_SEARCH_REQUEST': 
            return {
                ...state,
                searchTerm: action.payload.searchTerm,
                loading: true
            }

        case 'GET_RESULTS_SEARCH_SUCESS': 
            return {
                ...state,
                loading: false,
                error: null,
                results: [...action.payload.results]
            }
        
        case 'GET_RESULTS_SEARCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default:
            return state;
    }

}