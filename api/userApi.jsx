import axiosClient from "./axiosClient";
const userApi = {
    getAll: () =>{
        return axiosClient.get("/api/user/users");
    },
    getByID: (id) =>{
        return axiosClient.get(`/api/user/users/${id}`)
    },
    addEmployee: (Avatar,userName,FullName,Email,Birthday,Gender,PhoneNumber,CitizenID,Specification) =>{
        
        return axiosClient.post(`/api/user/AddEmployee`,{
            FullName:FullName,
            Email:Email,
            Birthday:Birthday,
            UserName:userName,
            Avatar:Avatar,
            Gender:Gender,
            PhoneNumber:PhoneNumber,
            CitizenID:CitizenID,
            SpecificationID:Specification,
        },{
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
        })
    },
    getEmployee: ()=>{
        return axiosClient.get(`/api/user/employee`)
    },
    deleteUser: (id) =>{
        return axiosClient.delete(`/api/user/users/${id}`)
    }
}
export default userApi