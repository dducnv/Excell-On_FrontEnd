import axiosClient from "./axiosClient";
const specificationsApi = {
    getAll: () =>{
        return axiosClient.get("/api/specifications");
    },
    getByID: (id) =>{
        return axiosClient.get(`/api/specifications/${id}`)
    },
    postSpecifications: (Name) =>{
        return axiosClient.post(`/api/specifications`,{
            Name:Name,
        })
    },
    deleteSpecifications: (id) =>{
        return axiosClient.delete(`/api/specifications/${id}`)
    }
    
}

export default specificationsApi