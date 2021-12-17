
import * as AccountActionTypes from '../AccountActionTypes';

export const OrderParks = (state = {
        isLoading: true,
        errMess: null,
        parks: []
    }, action) => {
    switch (action.type) {
        case AccountActionTypes.ADD_ORDERPARKS:
            return {...state, isLoading: false, errMess: null, parks: action.payload}
        case AccountActionTypes.ORDERPARKS_LOADING:
            return {...state, isLoading: true, errMess: null, parks: []}
        case AccountActionTypes.ORDERPARKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, parks: []}
        default:
            return state;
    }
}