import { createStore, combineReducers } from 'redux';
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
        }) 
        
    );

    return store;
};