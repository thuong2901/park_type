import * as ActionTypes from '../ActionTypes';

export const UserList = (state = {
        isLoading: true,
        errMess: null,
        user_list: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USERLIST:
            return {...state, isLoading: false, errMess: null, user_list: action.payload}
        case ActionTypes.USERLIST_LOADING:
            return {...state, isLoading: true, errMess: null, user_list: []}
        case ActionTypes.USERLIST_FAILED:
            return {...state, isLoading: false, errMess: action.payload, user_list: []}
        default:
            return state;
    }
}