import * as ActionTypes from '../ActionTypes';

export const ParkList = (state = {
        isLoading: true,
        errMess: null,
        park_list: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PARKLIST:
            return {...state, isLoading: false, errMess: null, park_list: action.payload}
        case ActionTypes.PARKLIST_LOADING:
            return {...state, isLoading: true, errMess: null, park_list: []}
        case ActionTypes.PARKLIST_FAILED:
            return {...state, isLoading: false, errMess: action.payload, park_list: []}
        default:
            return state;
    }
}