import * as ActionTypes from '../ActionTypes';

export const UserChart = (state = {
        isLoading: true,
        errMess: null,
        user_chart: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USERCHART:
            return {...state, isLoading: false, errMess: null, user_chart: action.payload}
        case ActionTypes.USERCHART_LOADING:
            return {...state, isLoading: true, errMess: null, user_chart: []}
        case ActionTypes.USERCHART_FAILED:
            return {...state, isLoading: false, errMess: action.payload, user_chart: []}
        default:
            return state;
    }
}