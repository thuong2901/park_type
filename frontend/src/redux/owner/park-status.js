import * as ActionTypes from "../ActionTypes";

export const OwnerParkStatus = (state = {
    isLoading: true,
    errMess: null,
    owner_park_status: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PARKSTATUS:
            return { ...state, isLoading: false, errMess: null, owner_park_status: action.payload }
        case ActionTypes.PARKSTATUS_LOADING:
            return { ...state, isLoading: true, errMess: null, owner_park_status: [] }
        case ActionTypes.PARKSTATUS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, owner_park_status: [] }
        default:
            return state;
    }
}