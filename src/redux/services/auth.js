import axios from "axios";


const url = "http://localhost:8080/SPRING-SECURITY-CUSTOMLOGIN/api/auth/";

class AuthServices {
    login(username, password) {
        return axios
            .post(`${url}signin`, {
                username,
                password,
            })
            .then((res) => {
                if (res.data.accessToken) {
                    console.log(`executeddddddddd`);
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
                return res.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(`${url}signup`, {
            username,
            email,
            password,
        });
    }
}

export default new AuthServices();
