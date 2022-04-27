import axiosClient from "./axiosClient";
const userApi = {
    getAll: () =>{
        return axiosClient.get("/api/user/users");
    },
    getByID: (id) =>{
        return axiosClient.get(`/api/user/users/${id}`)
    },
    addEmployee: (Avatar,FullName,Email,Birthday,Gender,PhoneNumber,Orders,CitizenID,Specification) =>{
        return axiosClient.post(`/api/user/AddEmployee`,{
            FullName:FullName,
            Email:Email,
            Birthday:Birthday,
            Avatar:Avatar,
            Gender:Gender,
            PhoneNumber:PhoneNumber,
            Orders:Orders,
            CitizenID:CitizenID,
            SpecificationID:Specification,
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