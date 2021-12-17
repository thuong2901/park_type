
import * as AccountActionTypes from '../AccountActionTypes';

export const InfoUser = (state = {
        isLoading: true,
        errMess: null,
        info: {}
    }, action) => {
    switch (action.type) {
        case AccountActionTypes.ADD_INFOUSER:
            return {...state, isLoading: false, errMess: null, info: action.payload}
        case AccountActionTypes.INFOUSER_LOADING:
            return {...state, isLoading: true, errMess: null, info:{}}
        case AccountActionTypes.INFOUSER_FAILED:
            return {...state, isLoading: false, errMess: action.payload, info: {}}
        default:
            return state;
    }
}