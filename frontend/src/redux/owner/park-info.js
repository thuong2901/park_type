import * as ActionTypes from "../ActionTypes";

export const OwnerParkInfo = (state = {
    isLoading: true,
    errMess: null,
    owner_park_info: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PARKINFO:
            return { ...state, isLoading: false, errMess: null, owner_park_info: action.payload }
        case ActionTypes.PARKINFO_LOADING:
            return { ...state, isLoading: true, errMess: null, owner_park_info: [] }
        case ActionTypes.PARKINFO_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, owner_park_info: [] }
        default:
            return state;
    }
}