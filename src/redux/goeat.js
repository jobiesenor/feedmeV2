import * as ActionTypes from './ActionTypes';

export const GoEats = (state = {
        isLoading: true,
        errMess: null,
        goeats: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_GOEATS: 
            return {...state, isLoading: false, errMess: null, goeats: action.payload};
        case ActionTypes.GOEATS_LOADING: 
            return {...state, isLoading: true, errMess: null, goeats: []};    
        case ActionTypes.GOEATS_FAILED: 
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};