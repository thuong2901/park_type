import * as ActionTypes from '../ActionTypes';

export const FavoriteMark = (state = {
        isLoading: true,
        errMess: null,
        mark: {}
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FAVOMARK:
            return {...state, isLoading: false, errMess: null, mark: action.payload}
        default:
            return state;
    }
}