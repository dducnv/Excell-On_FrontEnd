import axiosClient from "./axiosClient";
const authApi ={
    LoginApi: (username, password) => {
        let loginData =  'grant_type=password&username='+ username + '&password=' + password;
        return axiosClient.post("/token",loginData, {
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded',
                "Access-Control-Allow-Origin": "*"
            },
        });
    },
    Register : (FullName,Email,UserName,Address,Password,ConfirmPassword) =>{
        let registerData = JSON.stringify({
            FullName:FullName,
            Email:Email,
            UserName:UserName,
            Address:Address,
            Password:Password,
            ConfirmPassword:ConfirmPassword
        })
        return axiosClient.post("/api/account/register",registerData, {
            headers: {
                "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
        });
    }
}

export default authApi