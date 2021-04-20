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
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
                return res.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(name, phone, email, account) {
        return axios.post(`${url}signup`, {
            name,
            phone,
            email,
            account,
        });
    }
}

export default new AuthServices();
