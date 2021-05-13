import * as ActionTypes from './ActionTypes';

export const ShowMes = (state = {
        isLoading: true,
        errMess: null,
        showmes: [ ]
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SHOWMES: 
            return {...state, isLoading: false, errMess: null, showmes: action.payload};
        case ActionTypes.SHOWMES_LOADING: 
            return {...state, isLoading: true, errMess: null, showmes: []};    
        case ActionTypes.SHOWMES_FAILED: 
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};