const authReducer = (state, {type, payload}) => {
    switch(type) {
        case "EMAIL":
            return {
                ...state,
                email: payload
            }
        case "PASSWORD":
            return {
                ...state,
                password: payload
            }
        case "TOKEN":
            return {
                ...state,
                token: payload
            }
        case "CLEAR_CREDENTIALS":
            return {
                ...state,
                email: "",
                password: ""
            }
        default:
            return state
    }
}

export default authReducer;

