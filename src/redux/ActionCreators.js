import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchSelections = () => dispatch => {
    dispatch(selectionsLoading());

    return fetch(baseUrl + 'selections')
        .then(response => {
                if(response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
            }
        )
        .then(response => response.json())
        .then(selections => dispatch(addSelections(selections)))   
        .catch(error => dispatch(selectionsFailed(error.message)));
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

export const fetchDineIns = () => dispatch => {
    dispatch(dineinsLoading());

    return fetch(baseUrl + 'dineins')
    .then(response => {
        if(response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
            }
        )
        .then(response => response.json())
        .then(dineins => dispatch(addDineIns(dineins)))
        .catch(error => dispatch(dineinsFailed(error.message)));
   
};

export const dineinsLoading = () => ({
    type: ActionTypes.DINEINS_LOADING
});

export const dineinsFailed = errMess => ({
    type: ActionTypes.DINEINS_FAILED, 
    payload: errMess
});

export const addDineIns = dineins => ({
    type: ActionTypes.ADD_DINEINS,
    payload: dineins
})

export const fetchGoEats = () => dispatch => {
    dispatch(goeatsLoading());

    return fetch(baseUrl + 'goeats')
    .then(response => {
        if(response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
            }
        )
        .then(response => response.json())
        .then(goeats => dispatch(addGoeats(goeats)))
        .catch(error => dispatch(goeatsFailed(error.message)));
};

export const goeatsLoading = () => ({
    type: ActionTypes.GOEATS_LOADING
});

export const goeatsFailed = errMess => ({
    type: ActionTypes.GOEATS_FAILED, 
    payload: errMess
});

export const addGoeats = goeats => ({
    type: ActionTypes.ADD_GOEATS,
    payload: goeats
});

export const fetchShowMes = () => dispatch => {
    dispatch(showmesLoading());

    return fetch(baseUrl + 'showme')
    .then(response => {
        if(response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
            }
        )
        .then(response => response.json())
        .then(showmes => dispatch(addShowmes(showmes)))
        .catch(error => dispatch(showmesFailed(error.message)));
};

export const showmesLoading = () => ({
    type: ActionTypes.SHOWMES_LOADING
});

export const showmesFailed = errMess => ({
    type: ActionTypes.SHOWMES_FAILED, 
    payload: errMess
});

export const addShowmes = showmes => ({
    type: ActionTypes.ADD_SHOWMES,
    payload: showmes 
})