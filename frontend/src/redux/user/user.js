import * as ActionTypes from '../ActionTypes';

export const User = (state = {
        isLoading: true,
        errMess: null,
        user: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return {...state, isLoading: false, errMess: null, user: action.payload}
        case ActionTypes.USER_LOADING:
            return {...state, isLoading: true, errMess: null, user: []}
        case ActionTypes.USER_FAILED:
            return {...state, isLoading: false, errMess: action.payload, user: []}
        default:
            return state;
    }
}