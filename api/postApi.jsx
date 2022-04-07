import axiosClient from "./axiosClient";
const postApi  = {
    getPosts: (category,slug) => {
        return axiosClient.get(`/post-details/${category}/${slug}`);
    },
    getAllPosts: () => {
        return axiosClient.get("/get-post");
    },
    getPostsByCategory: (category) => {
        return axiosClient.get(`/category-archives/${category}`);
    },
    getPostsByTag: (tag) => {
        return axiosClient.get(`/tag-archives/${tag}`);
    },
    monthlyArchives: (year, month) => {
        return axiosClient.get(`/monthly-archives/${year}/${month}`);
    },
}
export default postApi;