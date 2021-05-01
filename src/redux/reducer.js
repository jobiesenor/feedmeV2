import { SELECTIONS } from '../shared/selections';
import { GOEATS } from '../shared/goeat';
import { DINEINS } from '../shared/dineIn';
import { SHOWME } from '../shared/showme';

export const initialState = {
    selections: SELECTIONS,
    goeats: GOEATS,
    dineins: DINEINS,
    showme: SHOWME
};

export const Reducer = (state = initialState, action) => {
    return state;
};