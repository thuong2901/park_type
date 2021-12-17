
import * as AccountActionTypes from '../AccountActionTypes';

export const HistoryParks = (state = {
        isLoading: true,
        errMess: null,
        parks: []
    }, action) => {
    switch (action.type) {
        case AccountActionTypes.ADD_HISTORYPARKS:
            return {...state, isLoading: false, errMess: null, parks: action.payload}
        case AccountActionTypes.HISTORYPARKS_LOADING:
            return {...state, isLoading: true, errMess: null, parks: []}
        case AccountActionTypes.HISTORYPARKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, parks: []}
        default:
            return state;
    }
}