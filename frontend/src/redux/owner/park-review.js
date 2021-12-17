import * as ActionTypes from "../ActionTypes";

export const OwnerParkReview = (state = {
    isLoading: true,
    errMess: null,
    owner_park_review: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PARKREVIEW:
            return { ...state, isLoading: false, errMess: null, owner_park_review: action.payload }
        case ActionTypes.PARKREVIEW_LOADING:
            return { ...state, isLoading: true, errMess: null, owner_park_review: [] }
        case ActionTypes.PARKREVIEW_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, owner_park_review: [] }
        default:
            return state;
    }
}