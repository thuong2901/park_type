import * as ActionTypes from './ActionTypes';
import { baseUrl } from "../shared/baseUrl";

export const setSnackbar = (
    snackbarOpen,
    snackbarType = "success",
    snackbarMessage = ""
) => ({
    type: ActionTypes.SET_SNACKBAR,
    snackbarOpen,
    snackbarType,
    snackbarMessage
});
//Sign up
export const postUser = (username, password, email, firstname, lastname, type) => (dispatch) => {
    const newUser = {
        username: username,
        password: password,
        email: email,
        firstname: firstname,
        lastname: lastname,
        type: type
    };
    return fetch(baseUrl + 'authen/signup',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
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
            dispatch(setSnackbar(true, "success", "Vui lòng vào email để xác thực tài khoản!")); 
            return response;

        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
        
}

export const userFailed = (errmess) => ({
    type: ActionTypes.USER_FAILED,
    payload: errmess
});

export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
});

//Verify
export const getVerify = (code) => (dispatch) => {
    return fetch(baseUrl + 'authen/verify?code=' + code, {credentials: 'include'})
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                throw response;
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch(setSnackbar(true, "success", "Xác thực thành công!")); 
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
}

// Forgotten
export const sendCode = (username) => (dispatch) => {
    const getCode = {
        username: username,
    }
    return fetch(baseUrl + 'authen/forgotten',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(getCode),
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
            dispatch(setSnackbar(true, "success", "Vui lòng vào email để lấy mã xác thực!")); 
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
}

export const postForgotten = (username, code) => (dispatch) => {
    const Forgotten = {
        username: username,
        code: code
    }
    return fetch(baseUrl + 'authen/forgotten/code',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Forgotten),
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
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
}

export const postNewPassword = (username, password) => (dispatch) => {
    const NewPassword = {
        username: username,
        password: password
    }
    return fetch(baseUrl + 'authen/forgotten/password',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(NewPassword),
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
            dispatch(setSnackbar(true, "success", "Thay đổi mật khẩu thành công!")); 
            return response;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
}


// Login 
export const postLogin = (username, password) => (dispatch) => {
    const Login = {
        username: username,
        password: password
    };
    return fetch(baseUrl + 'authen/login',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Login),
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
        .then(user => {
            localStorage.setItem('login', true);
            localStorage.setItem('username', user['username']);
            localStorage.setItem('role', user['role']);
            localStorage.setItem('token', user['token']);
            const event = new Event('storagechange');
            window.dispatchEvent(event);
            dispatch(setSnackbar(true, "success", "Đăng nhập thành công"));
            return user;
        })
        .catch(error =>  {
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
}


export const Logout = () => (dispatch) => {
    const token = localStorage.getItem('token');
    return fetch(baseUrl + 'authen/logout',
        {
            method: 'GET',
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
        .then(user => {
            localStorage.removeItem('login');
            localStorage.removeItem('username');
            localStorage.removeItem('role');
            localStorage.removeItem('token');
            const event = new Event('storagechange');
            window.dispatchEvent(event);
            dispatch(setSnackbar(true, "success", "Đăng xuất thành công"));
        })
        .catch(error =>  {
            localStorage.removeItem('login');
            localStorage.removeItem('username');
            localStorage.removeItem('role');
            localStorage.removeItem('token');
            const event = new Event('storagechange');
            window.dispatchEvent(event);
            error.json().then(body => {
                dispatch(setSnackbar(true, "error", body.message));
            })
        });
}