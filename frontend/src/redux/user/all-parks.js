import * as ActionTypes from '../ActionTypes';

export const AllParks = (state = {
        isLoading: true,
        errMess: null,
        parks: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ALLPARKS:
            return {...state, isLoading: false, errMess: null, parks: action.payload}
        case ActionTypes.ALLPARKS_LOADING:
            return {...state, isLoading: true, errMess: null, parks: []}
        case ActionTypes.ALLPARKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, parks: []}
        default:
            return state;
    }
}