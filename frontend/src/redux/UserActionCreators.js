import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { setSnackbar } from './AuthenActionCreators';

// get all parks for maker
export const fetchAllParks = () => (dispatch) => {
    dispatch(allParksLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'parks', {
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
        .then(all_parks => dispatch(addAllParks(all_parks)))
        .catch(error => dispatch(allParksFailed(error.message)));
}

export const allParksLoading = () => ({
    type: ActionTypes.ALLPARKS_LOADING
});

export const allParksFailed = (errmess) => ({
    type: ActionTypes.ALLPARKS_FAILED,
    payload: errmess
});

export const addAllParks = (all_parks) => ({
    type: ActionTypes.ADD_ALLPARKS,
    payload: all_parks
});


// fetch best parks list
export const fetchBestParks = (search_id) => (dispatch) => {
    dispatch(bestParksLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'parks/best?search_id=' + search_id, {
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
        .then(best_parks => dispatch(addBestParks(best_parks)))
        .catch(error => dispatch(bestParksFailed(error.message)));
}

export const bestParksLoading = () => ({
    type: ActionTypes.BESTPARKS_LOADING
});

export const bestParksFailed = (errmess) => ({
    type: ActionTypes.BESTPARKS_FAILED,
    payload: errmess
});

export const addBestParks = (best_parks) => ({
    type: ActionTypes.ADD_BESTPARKS,
    payload: best_parks
});


// fetch cheap parks list
export const fetchCheapParks = (search_id) => (dispatch) => {
    dispatch(cheapParksLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'parks/cheap?search_id=' + search_id, {
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
        .then(cheap_parks => dispatch(addCheapParks(cheap_parks)))
        .catch(error => dispatch(cheapParksFailed(error.message)));
}

export const cheapParksLoading = () => ({
    type: ActionTypes.CHEAPPARKS_LOADING
});

export const cheapParksFailed = (errmess) => ({
    type: ActionTypes.CHEAPPARKS_FAILED,
    payload: errmess
});

export const addCheapParks = (cheap_parks) => ({
    type: ActionTypes.ADD_CHEAPPARKS,
    payload: cheap_parks
});


// fetch near parks list
export const fetchNearParks = (search_id) => (dispatch) => {
    dispatch(nearParksLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'parks/near?search_id=' + search_id, {
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
        .then(near_parks => dispatch(addNearParks(near_parks)))
        .catch(error => dispatch(nearParksFailed(error.message)));
}

export const nearParksLoading = () => ({
    type: ActionTypes.NEARPARKS_LOADING
});

export const nearParksFailed = (errmess) => ({
    type: ActionTypes.NEARPARKS_FAILED,
    payload: errmess
});

export const addNearParks = (near_parks) => ({
    type: ActionTypes.ADD_NEARPARKS,
    payload: near_parks
});


// park-status
export const fetchParkStatus = (park_id, search_id) => (dispatch) => {
    dispatch(parkStatusLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'parks/status/' + park_id + "?search_id=" + search_id, {
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
        .then(park_status => dispatch(addParkStatus(park_status)))
        .catch(error => dispatch(parkStatusFailed(error.message)));
}

export const parkStatusLoading = () => ({
    type: ActionTypes.PARK_STATUS_LOADING
});

export const parkStatusFailed = (errmess) => ({
    type: ActionTypes.PARK_STATUS_FAILED,
    payload: errmess
});

export const addParkStatus = (park_status) => ({
    type: ActionTypes.ADD_PARK_STATUS,
    payload: park_status
});


//park-info
export const fetchParkInfo = (park_id) => (dispatch) => {
    dispatch(parkInfoLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'parks/info/' + park_id, {
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
        .then(park_info => dispatch(addParkInfo(park_info)))
        .catch(error => dispatch(parkInfoFailed(error.message)));
}

export const parkInfoLoading = () => ({
    type: ActionTypes.PARK_INFO_LOADING
});

export const parkInfoFailed = (errmess) => ({
    type: ActionTypes.PARK_INFO_FAILED,
    payload: errmess
});

export const addParkInfo = (park_info) => ({
    type: ActionTypes.ADD_PARK_INFO,
    payload: park_info
});


//get comments
export const fetchComments = (park_id) => (dispatch) => {
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'parks/comment/' + park_id, {
        credentials: "include",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
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
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


//post comment
export const postComment = (park_id, rating, content) => (dispatch) => {
    const token = localStorage.getItem('token');
    const newComment = {
        park_id: park_id,
        rating: rating,
        content: content
    }

    return fetch(baseUrl + 'parks/comment', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                throw response;
            }
        })
        .then(response => response.json())
        .then((newComment) => {
            dispatch(setSnackbar(true, "success", "Thêm đánh giá thành công"));
        })
        .catch(error => {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
}


//post report
export const postReport = (park_id, content) => (dispatch) => {
    const token = localStorage.getItem('token');
    const newReport = {
        park_id: park_id,
        content: content
    }

    return fetch(baseUrl + 'parks/report', {
        method: 'POST',
        body: JSON.stringify(newReport),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
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
        .then((newReport) => {
            dispatch(setSnackbar(true, "success", "Thêm report thành công")); 
        })
        .catch(error => {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
}



// fetch search infomation
export const fetchSearchInfo = (search_id) => (dispatch) => {
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'parks/search?search_id=' + search_id, {
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
        .then(search_info => dispatch(addSearchInfo(search_info)))
        .catch(error => { console.log(error.message) });
}

export const addSearchInfo = (search_info) => ({
    type: ActionTypes.ADD_SEARCHINFO,
    payload: search_info
});


//post search infomation
export const postSearchInfo = (address, timein) => (dispatch) => {
    const token = localStorage.getItem('token');
    const newSearchInfo = {
        address: address,
        timein: timein
    }

    return fetch(baseUrl + 'parks/search', {
        method: 'POST',
        body: JSON.stringify(newSearchInfo),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
    })
        .then(response => {
            console.log(response);
            if (response.ok) {
                return response;
            }
            else {
                throw response;
            }
        })
        .then(response => response.json())
        .then((newSearchInfo) => {
            return newSearchInfo;
        })
        .catch(error => {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
}


// post booking
export const postBooking = (park_id, timein) => (dispatch) => {
    const token = localStorage.getItem('token');
    const newBooking = {
        park_id: park_id,
        timein: timein,
    }

    return fetch(baseUrl + 'accounts/pending', {
        method: 'POST',
        body: JSON.stringify(newBooking),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
    })
        .then(response => {
            console.log(response);
            if (response.ok) {
                return response;
            }
            else {
                throw response;
            }
        })
        .then(response => response.json())
        .then((newBooking) => {
            dispatch(setSnackbar(true, "success", "Đặt trước thành công"))
        })
        .catch(error => {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message))
            })
        });
}


// post is mark
export const postMark = (park_id, isMark) => (dispatch) => {
    const token = localStorage.getItem('token');
    const newMark = {
        park_id,
        isMark
    }

    return fetch(baseUrl + 'accounts/favorite', {
        method: 'POST',
        body: JSON.stringify(newMark),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
    })
        .then(response => {
            console.log(response);
            if (response.ok) {
                return response;
            }
            else {
                throw response;
            }
        }) 
        .then(response => response.json())
        .then((newMark) => {
            //alert("Thêm vào yêu thích " + JSON.stringify(newMark));
        })
        .catch(error => {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message))
            })
        });
}

export const fetchMark = (park_id) => (dispatch) => {
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'parks/mark/' + park_id, {
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
        .then(favo_mark => dispatch(addFavoMark(favo_mark)))
        .catch(error => { console.log(error.message) });
}

export const addFavoMark = (favo_mark) => ({
    type: ActionTypes.ADD_FAVOMARK,
    payload: favo_mark
});