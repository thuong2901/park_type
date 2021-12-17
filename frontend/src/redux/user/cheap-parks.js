import * as ActionTypes from '../ActionTypes';

export const CheapParks = (state = {
        isLoading: true,
        errMess: null,
        parks: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CHEAPPARKS:
            return {...state, isLoading: false, errMess: null, parks: action.payload}
        case ActionTypes.CHEAPPARKS_LOADING:
            return {...state, isLoading: true, errMess: null, parks: []}
        case ActionTypes.CHEAPPARKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, parks: []}
        default:
            return state;
    }
}