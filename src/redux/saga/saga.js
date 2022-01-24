import { call, all, put, takeLatest } from 'redux-saga/effects';
import { googApi } from '../../service/api.js';

function* getResultSearch(action){
    
    try {
        let result = yield call(googApi, action.payload);
        yield put( {type: 'GET_RESULTS_SEARCH_SUCESS', payload: result} );

    } catch (e) {
        yield put( {type: 'GET_RESULTS_SEARCH_ERROR', payload: e} );
    }

}

export default function* rootSaga(){
    return yield all([
        yield takeLatest( 'GET_RESULTS_SEARCH_REQUEST', getResultSearch )
    ]);
};