import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import  createSaga  from 'redux-saga'

import sagas from '../saga/saga.js'
import searchReducer from '../core/reducers/search.reduce.js';
import darkModeReducer from '../core/reducers/theme.reduce.js';

const rootReducer = combineReducers({
    search: searchReducer,
    darkMode: darkModeReducer
});

const sagaMiddleware = createSaga();


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware( sagaMiddleware )
    )
);

sagaMiddleware.run(sagas);

export default store;