import * as ActionTypes from '../ActionTypes';

export const BestParks = (state = {
        isLoading: true,
        errMess: null,
        parks: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BESTPARKS:
            return {...state, isLoading: false, errMess: null, parks: action.payload}
        case ActionTypes.BESTPARKS_LOADING:
            return {...state, isLoading: true, errMess: null, parks: []}
        case ActionTypes.BESTPARKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, parks: []}
        default:
            return state;
    }
}