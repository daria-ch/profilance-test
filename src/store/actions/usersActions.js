import {
    LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER, USER_IS_ADMIN,
} from "./actionTypes";
import {push} from 'connected-react-router';

export const loginUserSuccess = login => ({type: LOGIN_USER_SUCCESS, login});
export const loginUserFailure = error => ({type: LOGIN_USER_FAILURE, error});
export const logoutUserSuccess = () => ({type: LOGOUT_USER});
export const userIsAdminSuccess = () => ({type: USER_IS_ADMIN});

export const loginUser = userData => {
    return async dispatch => {
        try {
            dispatch(loginUserSuccess(userData))
        } catch (e) {
            dispatch(loginUserFailure(e));
        }
    }
};

export const logoutUser = () => {
    return async dispatch => {
        await dispatch(logoutUserSuccess());
        await dispatch(push('/'));
    }
};

export const userIsAdmin = () => {
    return async dispatch => {
        await dispatch(userIsAdminSuccess());
    }
}