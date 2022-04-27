import axiosClient from "./axiosClient";
const serviceApi = {
    getAll: () =>{
        return axiosClient.get("/api/services");
    },
    getByID: (id) =>{
        return axiosClient.get(`/api/services/${id}`)
    },
    postService: (Name,Price,Description) =>{
        return axiosClient.post(`/api/services`,{
            Name:Name,
            Price:Price,
            Description:Description
        })
    },
    deleteService: (id) =>{
        return axiosClient.delete(`/api/services/${id}`)
    }
    
}

export default serviceApi