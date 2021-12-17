import * as ActionTypes from '../ActionTypes';

export const TransChart = (state = {
        isLoading: true,
        errMess: null,
        trans_chart: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TRANSCHART:
            return {...state, isLoading: false, errMess: null, trans_chart: action.payload}
        case ActionTypes.TRANSCHART_LOADING:
            return {...state, isLoading: true, errMess: null, trans_chart: []}
        case ActionTypes.TRANSCHART_FAILED:
            return {...state, isLoading: false, errMess: action.payload, trans_chart: []}
        default:
            return state;
    }
}