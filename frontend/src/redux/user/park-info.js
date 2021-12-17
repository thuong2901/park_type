import * as ActionTypes from '../ActionTypes';

export const ParkInfo = (state = {
        isLoading: true,
        errMess: null,
        park_info: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PARK_INFO:
            return {...state, isLoading: false, errMess: null, park_info: action.payload}
        case ActionTypes.PARK_INFO_LOADING:
            return {...state, isLoading: true, errMess: null, park_info: []}
        case ActionTypes.PARK_INFO_FAILED:
            return {...state, isLoading: false, errMess: action.payload, park_info: []}
        default:
            return state;
    }
}