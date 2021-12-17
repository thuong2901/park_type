import * as ActionTypes from '../ActionTypes';

export const SearchInfo = (state = {
    search_info: []
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_SEARCHINFO:
        return {...state, search_info: action.payload}
    default:
        return state;
}
}