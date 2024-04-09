import axios from "axios";

const loginHandler = async (email, password) => {
    try {
        const {data: {token}, status} = await axios.post("https://quizhub.cyclic.app/api/auth/login", {
            email: email,
            password: password
        });
        if (status === 200) {
            localStorage.setItem("token", token);
            return token
        }
    } catch (error) {
        console.error(error);
    }
}

export default loginHandler;
