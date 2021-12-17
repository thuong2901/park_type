import * as AccountActionTypes from './AccountActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { setSnackbar } from './AuthenActionCreators';


export const fetchLoveParks = () => (dispatch) => {
    dispatch(loveParksLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'accounts/favorite', {
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
        .then(love_parks => dispatch(addLoveParks(love_parks)))
        .catch(error => dispatch(loveParksFailed(error.message)));
}

export const loveParksLoading = () => ({
    type: AccountActionTypes.LOVEPARKS_LOADING
});

export const loveParksFailed = (errmess) => ({
    type: AccountActionTypes.LOVEPARKS_FAILED,
    payload: errmess
});

export const addLoveParks = (love_parks) => ({
    type: AccountActionTypes.ADD_LOVEPARKS,
    payload: love_parks
});

export const fetchOrderParks = () => (dispatch) => {
    dispatch(orderParksLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'accounts/pending',{
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
        .then(order_parks => dispatch(addOrderParks(order_parks)))
        .catch(error => dispatch(orderParksFailed(error.message)));
}

export const orderParksLoading = () => ({
    type: AccountActionTypes.ORDERPARKS_LOADING
});

export const orderParksFailed = (errmess) => ({
    type: AccountActionTypes.ORDERPARKS_FAILED,
    payload: errmess
});

export const addOrderParks = (order_parks) => ({
    type: AccountActionTypes.ADD_ORDERPARKS,
    payload: order_parks
});

export const fetchHistoryParks = () => (dispatch) => {
    dispatch(historyParksLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'accounts/parking',{
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
        .then(history_parks => dispatch(addHistoryParks(history_parks)))
        .catch(error => dispatch(historyParksFailed(error.message)));
}

export const historyParksLoading = () => ({
    type: AccountActionTypes.HISTORYPARKS_LOADING
});

export const historyParksFailed = (errmess) => ({
    type: AccountActionTypes.HISTORYPARKS_FAILED,
    payload: errmess
});

export const addHistoryParks = (history_parks) => ({
    type: AccountActionTypes.ADD_HISTORYPARKS,
    payload: history_parks
});

export const fetchInfoUser = () => (dispatch) => {
    dispatch(infoUserLoading(true));
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'accounts/info',{
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
        .then(info_user => dispatch(addInfoUser(info_user)))
        .catch(error => dispatch(infoUserFailed(error.message)));
}

export const infoUserLoading = () => ({
    type: AccountActionTypes.INFOUSER_LOADING
});

export const infoUserFailed = (errmess) => ({
    type: AccountActionTypes.INFOUSER_FAILED,
    payload: errmess
});

export const addInfoUser = (info_user) => ({
    type: AccountActionTypes.ADD_INFOUSER,
    payload: info_user
});

//Change Info
export const postChange = (username, firstname, lastname, email, phone, address) => (dispatch) => {
    const changeUser = {
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        address: address,
    };
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'accounts/info', 
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify(changeUser),
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
            dispatch(setSnackbar(true, "success", "Thay đổi thông tin tài khoản thành công")); 
            return response;
        })
        .catch(error =>  { 
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
    }

export const changeFailed = (errmess) => ({
    type: AccountActionTypes.CHANGE_FAILED,
    payload: errmess
});

export const addChange = (user) => ({
    type: AccountActionTypes.ADD_CHANGE,
    payload: user
});

//delete user
export const postDelete = (username, email) => (dispatch) => {
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'accounts/info', 
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
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
            dispatch(setSnackbar(true, "success", "Xóa tài khoản thành công")); 
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
    }

//delete lovepark
export const postDeleteLovepark = (parks) => (dispatch) => {
    const token = localStorage.getItem('token');
    const deleteLovepark = {
        flist_list: parks
    };
    return fetch(baseUrl + 'accounts/favorite', 
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify(deleteLovepark),
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


//delete historypark
export const postDeleteHistorypark = (parks) => (dispatch) => {
    const token = localStorage.getItem('token');
    const deleteHistorypark = {
        parking_list: parks
    };
    return fetch(baseUrl + 'accounts/parking', 
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify(deleteHistorypark),
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

//delete orderpark
export const postDeleteOrderpark = (parks) => (dispatch) => {
    const token = localStorage.getItem('token');
    const deleteOrderpark = {
        pending_list: parks
    };
    return fetch(baseUrl + 'accounts/pending', 
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify(deleteOrderpark),
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
            dispatch(setSnackbar(true, "success", response.message)); 
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
    }
//change pass
export const postChangePass = (password, newpass, repass) => (dispatch) => {
    const token = localStorage.getItem('token');
    const changeUser = {
        password: password,
        newpass: newpass,
        repass: repass
    };
    return fetch(baseUrl + 'authen/changepass', 
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify(changeUser),
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
            dispatch(setSnackbar(true, "success", "Thay đổi mật khẩu tài khoản thành công")); 
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
    }

//Post verify
export const postVerify = () => (dispatch) => {
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'authen/verify', 
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
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
            dispatch(setSnackbar(true, "success", "Kiểm tra email để xác thực tài khoản")); 
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
    }
