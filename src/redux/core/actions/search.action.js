export function getResultSearch(searchTerm, page){
    return {
        type:'GET_RESULTS_SEARCH_REQUEST',
        payload: {...searchTerm, ...page}
    }
}

export function getResultSearchSucess(results){
    return {
        type:'GET_RESULTS_SEARCH_SUCESS',
        payload: {...results}
    }
}

export function getResultSearchError(error){
    return {
        type:'GET_RESULTS_SEARCH_ERROR',
        error,
    }
}