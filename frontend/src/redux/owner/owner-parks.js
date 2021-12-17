import * as ActionTypes from "../ActionTypes";

export const OwnerParks = (state = {
    isLoading: true,
    errMess: null,
    owner_parks: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_OWNERPARKS:
            return { ...state, isLoading: false, errMess: null, owner_parks: action.payload }
        case ActionTypes.OWNERPARKS_LOADING:
            return { ...state, isLoading: true, errMess: null, owner_parks: [] }
        case ActionTypes.OWNERPARKS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, owner_parks: [] }
        default:
            return state;
    }
}