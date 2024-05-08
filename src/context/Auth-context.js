import { createContext, useContext, useEffect, useReducer } from "react";
import authReducer from "../reducer/Auth-reducer";

const AuthContext = createContext();

const initialState = {
    email: "",
    password: "",
    token: "",
    quizCategory: "",
};

const AuthProvider = ({ children }) => {
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        authDispatch({
            type: "INITIAL_STATE",
            payload: token
        })
    }, []);

    const [{email, password, token, quizCategory}, authDispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{email, password, token, quizCategory, authDispatch}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider}
