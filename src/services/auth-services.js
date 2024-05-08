import axios from "axios";

const loginHandler = async (email, password) => {
    try {
        const {data: {token}, status} = await axios.post(process.env.REACT_APP_LOGIN_API, {
            email_id: email,
            password: password
        });
        if (status === 200) {
            localStorage.setItem("token", token);
            return token;
        }
    } catch (error) {
        console.error(error);
    }
}

export default loginHandler;
