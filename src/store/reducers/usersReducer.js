import {LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER, USER_IS_ADMIN} from "../actions/actionTypes";

const initialState = {
    users: [],
    user: null,
    admin: false,
    error: null,
    login: null,
    loginError: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {...state, login: action.login, loginError: null};
        case LOGIN_USER_FAILURE:
            return {...state, loginError: action.error};
        case LOGOUT_USER:
            return {...state, login: null, admin: false};
        case USER_IS_ADMIN:
            return {...state, admin: true}
        default:
            return state;
    }
};


export default usersReducer;