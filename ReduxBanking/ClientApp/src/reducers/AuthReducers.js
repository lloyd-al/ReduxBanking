const initState = {
    isLoggedIn: false
};

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case "TOGGLE_AUTH":
            return { ...state, isLoggedIn: !state.isLoggedIn };
        default:
            return state;
    }
}

export default AuthReducer;