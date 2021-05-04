import * as ActionTypes from './ActionTypes';
import { SELECTIONS } from '../shared/selections';

export const fetchSelections = () => dispatch => {

    dispatch(selectionsLoading());

    setTimeout(() => {
        dispatch(addSelections(SELECTIONS));
    }, 2000);
};

export const selectionsLoading = () => ({
    type: ActionTypes.SELECTIONS_LOADING
});

export const selectionsFailed = errMess => ({
    type: ActionTypes.SELECTIONS_FAILED, 
    payload: errMess
});

export const addSelections = selections => ({
    type: ActionTypes.ADD_SELECTIONS,
    payload: selections
})
