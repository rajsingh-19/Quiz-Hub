const authReducer = (state, {type, payload}) => {
    switch(type) {
        case "INITIAL_STATE":
            return {
                ...state,
                token: payload
            }
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
        case "CATEGORY":
            return {
                ...state,
                quizCategory: payload
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

