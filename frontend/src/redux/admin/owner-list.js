import * as ActionTypes from '../ActionTypes';

export const OwnerList = (state = {
        isLoading: true,
        errMess: null,
        owner_list: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_OWNERLIST:
            return {...state, isLoading: false, errMess: null, owner_list: action.payload}
        case ActionTypes.OWNERLIST_LOADING:
            return {...state, isLoading: true, errMess: null, owner_list: []}
        case ActionTypes.OWNERLIST_FAILED:
            return {...state, isLoading: false, errMess: action.payload, owner_list: []}
        default:
            return state;
    }
}