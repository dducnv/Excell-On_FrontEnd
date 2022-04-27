import axiosClient from "./axiosClient";
const authApi ={
    : (username, password) => {
        let loginData =  'grant_type=password&username='+ username + '&password=' + password;
        return axiosClient.post("/token",loginData, {
            headers: {
                "Content-Type": 'application/x-wwLoginApiw-form-urlencoded',
                "Access-Control-Allow-Origin": "*"
            },
        });
    }
}

export default authApi