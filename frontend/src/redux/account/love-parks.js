
import * as AccountActionTypes from '../AccountActionTypes';

export const LoveParks = (state = {
        isLoading: true,
        errMess: null,
        parks: []
    }, action) => {
    switch (action.type) {
        case AccountActionTypes.ADD_LOVEPARKS:
            return {...state, isLoading: false, errMess: null, parks: action.payload}
        case AccountActionTypes.LOVEPARKS_LOADING:
            return {...state, isLoading: true, errMess: null, parks: []}
        case AccountActionTypes.LOVEPARKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, parks: []}
        default:
            return state;
    }
}