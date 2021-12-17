import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { setSnackbar } from './AuthenActionCreators';

// get user list for admin
export const fetchUserList = () => (dispatch) => {
    dispatch(userListLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'admin/accounts/userinfo', {
        credentials: "include",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(user_list => dispatch(addUserList(user_list)))
        .catch(error => dispatch(userListFailed(error.message)));
}

export const userListLoading = () => ({
    type: ActionTypes.USERLIST_LOADING
});

export const userListFailed = (errmess) => ({
    type: ActionTypes.USERLIST_FAILED,
    payload: errmess
});

export const addUserList = (user_list) => ({
    type: ActionTypes.ADD_USERLIST,
    payload: user_list
});


// get owner list for admin
export const fetchOwnerList = () => (dispatch) => {
    dispatch(ownerListLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'admin/accounts/ownerinfo', {
        credentials: "include",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(owner_list => dispatch(addOwnerList(owner_list)))
        .catch(error => dispatch(ownerListFailed(error.message)));
}

export const ownerListLoading = () => ({
    type: ActionTypes.OWNERLIST_LOADING
});

export const ownerListFailed = (errmess) => ({
    type: ActionTypes.OWNERLIST_FAILED,
    payload: errmess
});

export const addOwnerList = (owner_list) => ({
    type: ActionTypes.ADD_OWNERLIST,
    payload: owner_list
});


// get park list for admin
export const fetchParkList = () => (dispatch) => {
    dispatch(parkListLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'admin/parks', {
        credentials: "include",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(park_list => dispatch(addParkList(park_list)))
        .catch(error => dispatch(parkListFailed(error.message)));
}

export const parkListLoading = () => ({
    type: ActionTypes.PARKLIST_LOADING
});

export const parkListFailed = (errmess) => ({
    type: ActionTypes.PARKLIST_FAILED,
    payload: errmess
});

export const addParkList = (park_list) => ({
    type: ActionTypes.ADD_PARKLIST,
    payload: park_list
});


// get user chart for admin
export const fetchUserChart = () => (dispatch) => {
    dispatch(userChartLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'admin/charts/user-number', {
        credentials: "include",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(user_chart => dispatch(addUserChart(user_chart)))
        .catch(error => dispatch(userChartFailed(error.message)));
}

export const userChartLoading = () => ({
    type: ActionTypes.USERCHART_LOADING
});

export const userChartFailed = (errmess) => ({
    type: ActionTypes.USERCHART_FAILED,
    payload: errmess
});

export const addUserChart = (user_chart) => ({
    type: ActionTypes.ADD_USERCHART,
    payload: user_chart
});


// get rating chart for admin
export const fetchRatingChart = () => (dispatch) => {
    dispatch(ratingChartLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'admin/charts/rating-count', {
        credentials: "include",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(rating_chart => dispatch(addRatingChart(rating_chart)))
        .catch(error => dispatch(ratingChartFailed(error.message)));
}

export const ratingChartLoading = () => ({
    type: ActionTypes.RATINGCHART_LOADING
});

export const ratingChartFailed = (errmess) => ({
    type: ActionTypes.RATINGCHART_FAILED,
    payload: errmess
});

export const addRatingChart = (rating_chart) => ({
    type: ActionTypes.ADD_RATINGCHART,
    payload: rating_chart
});


// get rating chart for admin
export const fetchTransChart = () => (dispatch) => {
    dispatch(transChartLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'admin/charts/transaction', {
        credentials: "include",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(trans_chart => dispatch(addTransChart(trans_chart)))
        .catch(error => dispatch(transChartFailed(error.message)));
}

export const transChartLoading = () => ({
    type: ActionTypes.TRANSCHART_LOADING
});

export const transChartFailed = (errmess) => ({
    type: ActionTypes.TRANSCHART_FAILED,
    payload: errmess
});

export const addTransChart = (trans_chart) => ({
    type: ActionTypes.ADD_TRANSCHART,
    payload: trans_chart
});


// method delete user for admin
export const deleteUsers = (users_delete) => (dispatch) => {
    const token = localStorage.getItem('token');
    const users = { users_delete: users_delete }

    return fetch(baseUrl + "admin/accounts/userinfo",
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(users),
            credentials: "include"
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                throw response;
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch(setSnackbar(true, "success", "Đã xóa thành công")); 
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
}

// method delete owner for admin
export const deleteOwners = (owners_delete) => (dispatch) => {
    const token = localStorage.getItem('token');
    const owners = { owners_delete: owners_delete }

    return fetch(baseUrl + "admin/accounts/ownerinfo",
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(owners),
            credentials: "include"
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                throw response;
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch(setSnackbar(true, "success", "Đã xóa thành công")); 
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
}

// method delete park for admin
export const deleteParks = (parks_delete) => (dispatch) => {
    const token = localStorage.getItem('token');
    const parks = { parks_delete: parks_delete }

    return fetch(baseUrl + "admin/parks",
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(parks),
            credentials: "include"
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                throw response;
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch(setSnackbar(true, "success", "Đã xóa thành công")); 
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
}


// post verified park
export const postVerify = (park_id) => (dispatch) => {
    const token = localStorage.getItem('token');
    const verifiedPark= { park_id: park_id };

    return fetch(baseUrl + "admin/parks/verify",
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(verifiedPark),
            credentials: "include"
        })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                throw response;
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch(setSnackbar(true, "success", "Xác thực thành công")); 
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
}