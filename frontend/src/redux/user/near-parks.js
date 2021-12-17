import * as ActionTypes from '../ActionTypes';

export const NearParks = (state = {
        isLoading: true,
        errMess: null,
        parks: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NEARPARKS:
            return {...state, isLoading: false, errMess: null, parks: action.payload}
        case ActionTypes.NEARPARKS_LOADING:
            return {...state, isLoading: true, errMess: null, parks: []}
        case ActionTypes.NEARPARKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, parks: []}
        default:
            return state;
    }
}