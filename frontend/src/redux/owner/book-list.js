import * as ActionTypes from "../ActionTypes";

export const BookList = (state = {
    isLoading: true,
    errMess: null,
    book_list: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BOOKLIST:
            return { ...state, isLoading: false, errMess: null, book_list: action.payload }
        case ActionTypes.BOOKLIST_LOADING:
            return { ...state, isLoading: true, errMess: null, book_list: [] }
        case ActionTypes.BOOKLIST_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, book_list: [] }
        default:
            return state;
    }
}