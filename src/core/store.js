import { combineReducers } from 'redux';
import { applyMiddleware, compose, createStore } from 'redux';
import countriesReducer from '../countries/reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
    countries: countriesReducer
});

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk),
    )
);
