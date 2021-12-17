import * as ActionTypes from './ActionTypes';

export const Snackbar = (state = {
  snackbarOpen: false,
  snackbarType: "success",
  snackbarMessage: ""
}, action) => {
  switch (action.type) {
    case ActionTypes.SET_SNACKBAR:
      const { snackbarOpen, snackbarMessage, snackbarType } = action;
      return {
        ...state,
        snackbarOpen,
        snackbarType,
        snackbarMessage
      };
    default:
      return state;
  }
}