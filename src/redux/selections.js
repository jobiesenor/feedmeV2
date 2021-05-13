import * as ActionTypes from './ActionTypes';

export const Selections = (state = {
        isLoading: true,
        errMess: null,
        selections: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SELECTIONS: 
            return {...state, isLoading: false, errMess: null, selections: action.payload};
        case ActionTypes.SELECTIONS_LOADING: 
            return {...state, isLoading: true, errMess: null, selections: []};    
        case ActionTypes.SELECTIONS_FAILED: 
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};