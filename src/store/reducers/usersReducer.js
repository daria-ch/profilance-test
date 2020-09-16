const initialState = {
    users: [],
    user: null,
    admin: null,
    error: null,
    login: null,
    loginError: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export default usersReducer;