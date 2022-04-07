import axiosClient from "./axiosClient";
const webApi  = {
    getCategories: (category,slug) => {
        return axiosClient.get(`/get-category`);
    },
    getTags: (category,slug) => {
        return axiosClient.get(`/get-tag`);
    },
    getArchives: (category,slug) => {
        return axiosClient.get(`/get-archive`);
    },
    handleSearch: (keyword) => {
        return axiosClient.get(`/search`,{
            params: {
                search:keyword
            }
        }
        );
    },
    categoryArchives:(slug)=>{
        return axiosClient.get(`/category-archives/${slug}`);
    },
    monthlyArchives:(year,month)=>{
        return axiosClient.get(`/monthly-archives/${year}/${month}`);
    },
    tagArchives:(slug)=>{
        return axiosClient.get(`/tag-archives/${slug}`);
    },
    galleryArchives:()=>{
        return axiosClient.get(`/gallery`);
    },
}
export default webApi;