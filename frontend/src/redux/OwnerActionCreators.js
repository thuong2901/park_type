import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { setSnackbar } from './AuthenActionCreators';

// get parks for owner
export const fetchOwnerParks = () => (dispatch) => {
    dispatch(ownerParksLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'owner/parks/info',{
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
        .then(owner_parks => dispatch(addOwnerParks(owner_parks)))
        .catch(error => dispatch(ownerParksFailed(error.message)));
}

export const ownerParksLoading = () => ({
    type: ActionTypes.OWNERPARKS_LOADING
});

export const ownerParksFailed = (errmess) => ({
    type: ActionTypes.OWNERPARKS_FAILED,
    payload: errmess
});

export const addOwnerParks = (owner_parks) => ({
    type: ActionTypes.ADD_OWNERPARKS,
    payload: owner_parks
});

// fetch park info
export const fetchOwnerParkInfo = (park_id) => (dispatch) => {
    dispatch(ownerParkInfoLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'owner/parks/info/' + park_id,{
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
        .then(owner_park_info => dispatch(addOwnerParkInfo(owner_park_info)))
        .catch(error => dispatch(ownerParkInfoFailed(error.message)));
}

export const ownerParkInfoLoading = () => ({
    type: ActionTypes.PARKINFO_LOADING
});

export const ownerParkInfoFailed = (errmess) => ({
    type: ActionTypes.PARKINFO_FAILED,
    payload: errmess
});

export const addOwnerParkInfo = (owner_park_info) => ({
    type: ActionTypes.ADD_PARKINFO,
    payload: owner_park_info
});

// push edit park info
export const pushEditParkInfo = (park_id, name, total_space, location, price, hasCamera, hasRoof,
    allowOvernight, allowBooking, description, open_time, close_time, allow24h, removeImages) => (dispatch) => {
        const token = localStorage.getItem('token');
        const editParkInfo = {
            name: name,
            total_space: total_space,
            location: location,
            price: price,
            hasCamera: hasCamera,
            hasRoof: hasRoof,
            allowOvernight: allowOvernight,
            allowBooking: allowBooking,
            description: description,
            open_time: open_time,
            close_time: close_time,
            allow24h: allow24h,
            removeImages: removeImages
        }

        return fetch(baseUrl + 'owner/parks/info/' + park_id, {
            method: 'PUT',
            body: JSON.stringify(editParkInfo),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            credentials: 'include'
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
            dispatch(setSnackbar(true, "success", "Chỉnh sửa thành công")); 
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });

    }

// post park image
export const postParkImages = (park_id, images) => (dispatch) => {
    const token = localStorage.getItem('token');
    const newImages = { images: images }

    return fetch(baseUrl + 'upload/parks/' + park_id, {
        method: 'POST',
        body: JSON.stringify(newImages),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            throw response;
        }
    })
    .then(response => response.json())
    .catch(error =>  {
        error.json().then(body => {
            dispatch(setSnackbar(true, "error", body.message));
        })
    });
}


// post new park
export const postNewPark = (name, total_space, location, price, hasCamera, hasRoof,
    allowOvernight, allowBooking, description, open_time, close_time, allow24h) => (dispatch) => {
        const token = localStorage.getItem('token');
        const newPark = {
            name: name,
            total_space: total_space,
            location: location,
            price: price,
            hasCamera: hasCamera,
            hasRoof: hasRoof,
            allowOvernight: allowOvernight,
            allowBooking: allowBooking,
            description: description,
            open_time: open_time,
            close_time: close_time,
            allow24h: allow24h
        }

        return fetch(baseUrl + 'owner/parks/info', {
            method: 'POST',
            body: JSON.stringify(newPark),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            credentials: 'include'
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
            dispatch(setSnackbar(true, "success", "Tạo bãi đỗ thành công")); 
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
    }

// delete a park
export const deletePark = (park_id) => (dispatch) => {
    const token = localStorage.getItem('token');
    return fetch(baseUrl + "owner/parks/info/" + park_id,
        {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            },
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
            dispatch(setSnackbar(true, "success", "Xóa bãi đỗ thành công")); 
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });

    }
// fetch park review
export const fetchParkReview = (park_id) => (dispatch) => {
    dispatch(parkReviewLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'owner/parks/rating/' + park_id,{
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
        .then(owner_park_review => dispatch(addParkReview(owner_park_review)))
        .catch(error => dispatch(parkReviewFailed(error.message)));
}

export const parkReviewLoading = () => ({
    type: ActionTypes.PARKREVIEW_LOADING
});

export const parkReviewFailed = (errmess) => ({
    type: ActionTypes.PARKREVIEW_FAILED,
    payload: errmess
});

export const addParkReview = (owner_park_info) => ({
    type: ActionTypes.ADD_PARKREVIEW,
    payload: owner_park_info
});

// fetch park status
export const fetchParkStatus = (park_id) => (dispatch) => {
    dispatch(parkStatusLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'owner/parks/status/' + park_id,{
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
        .then(owner_park_status => dispatch(addParkStatus(owner_park_status)))
        .catch(error => dispatch(parkStatusFailed(error.message)));
}

export const parkStatusLoading = () => ({
    type: ActionTypes.PARKSTATUS_LOADING
});

export const parkStatusFailed = (errmess) => ({
    type: ActionTypes.PARKSTATUS_FAILED,
    payload: errmess
});

export const addParkStatus = (owner_park_info) => ({
    type: ActionTypes.ADD_PARKSTATUS,
    payload: owner_park_info
});

// fetch book list
export const fetchBookList = (park_id) => (dispatch) => {
    dispatch(bookListLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'owner/parks/pending/' + park_id, {
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
        .then(book_list => dispatch(addBookList(book_list)))
        .catch(error => dispatch(bookListFailed(error.message)));
}

export const bookListLoading = () => ({
    type: ActionTypes.BOOKLIST_LOADING
});

export const bookListFailed = (errmess) => ({
    type: ActionTypes.BOOKLIST_FAILED,
    payload: errmess
});

export const addBookList = (book_list) => ({
    type: ActionTypes.ADD_BOOKLIST,
    payload: book_list
});

// owner change park status
export const postNewStatus = (park_id, value) => (dispatch) => {
    const token = localStorage.getItem('token');
    const newStatus = { control: value }

    return fetch(baseUrl + 'owner/parks/status/' + park_id, {
        method: 'POST',
        body: JSON.stringify(newStatus),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
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
        dispatch(setSnackbar(true, "success", "Cập nhật thành công")); 
        return response;
    })
    .catch(error =>  {
        error.json().then(body => {
            dispatch(setSnackbar(true, "error", body.message));
        })
    });
}

// owner verify booking
export const putBooking = (pending_id) => (dispatch) => {
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'owner/parks/pending/' + pending_id, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
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
        dispatch(setSnackbar(true, "success", "Xác nhận đặt trước")); 
        return response;
    })
    .catch(error =>  {
        error.json().then(body => {
            dispatch(setSnackbar(true, "error", body.message));
        })
    });
}

// owner report booking
export const deleteBooking = (pending_id) => (dispatch) => {
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'owner/parks/pending/' + pending_id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
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
        dispatch(setSnackbar(true, "success", "Xác nhận hủy đặt trước")); 
        return response;
    })
    .catch(error =>  {
        error.json().then(body => {
            dispatch(setSnackbar(true, "error", body.message));
        })
    });
}