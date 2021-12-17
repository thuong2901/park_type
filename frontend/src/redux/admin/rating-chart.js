import * as ActionTypes from '../ActionTypes';

export const RatingChart = (state = {
        isLoading: true,
        errMess: null,
        rating_chart: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RATINGCHART:
            return {...state, isLoading: false, errMess: null, rating_chart: action.payload}
        case ActionTypes.RATINGCHART_LOADING:
            return {...state, isLoading: true, errMess: null, rating_chart: []}
        case ActionTypes.RATINGCHART_FAILED:
            return {...state, isLoading: false, errMess: action.payload, rating_chart: []}
        default:
            return state;
    }
}