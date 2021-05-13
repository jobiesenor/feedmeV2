import * as ActionTypes from './ActionTypes';

export const DineIns = (state = {
        isLoading: true,
        errMess: null,
        dineins: [ ]
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DINEINS: 
            return {...state, isLoading: false, errMess: null, dineins: action.payload};
        case ActionTypes.DINEINS_LOADING: 
            return {...state, isLoading: true, errMess: null, dineins: []};    
        case ActionTypes.DINEINS_FAILED: 
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};
