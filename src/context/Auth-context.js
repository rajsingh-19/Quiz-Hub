import { createContext, useContext, useReducer } from "react";
import authReducer from "../reducer/Auth-reducer";

const AuthContext = createContext();

const initialValue = {
    email: "",
    password: "",
    token: ""
};

const AuthProvider = ({ children }) => {
    const [{email, password, token}, authDispatch] = useReducer(authReducer, initialValue);

    return (
        <AuthContext.Provider value={{email, password, token, authDispatch}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider}
