import * as ActionTypes from '../ActionTypes';

export const ParkStatus = (state = {
        isLoading: true,
        errMess: null,
        park_status: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PARK_STATUS:
            return {...state, isLoading: false, errMess: null, park_status: action.payload}
        case ActionTypes.PARK_STATUS_LOADING:
            return {...state, isLoading: true, errMess: null, park_status: []}
        case ActionTypes.PARK_STATUS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, park_status: []}
        default:
            return state;
    }
}