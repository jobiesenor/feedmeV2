import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { DineIns } from './dinein';
import { GoEats } from './goeat';
import { Selections } from './selections';
import { ShowMe } from './showme';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dineins: DineIns,
            goeats: GoEats,
            selections: Selections,
            showme: ShowMe
        }),
        applyMiddleware(thunk, logger) 
    );

    return store;
};