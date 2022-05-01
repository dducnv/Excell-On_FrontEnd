import axiosClient from "./axiosClient";
import Moment from "moment";
import qs from "qs";
const webApi = {
    employeeSpecification: (id, StartDate, EndDate) => {
        var raw = JSON.stringify({
            "SpecificationsID": id,
            "StartDate": Moment(StartDate).format("MM/DD/yyyy").toString(),
            "EndDate": Moment(EndDate).format("MM/DD/yyyy").toString()
          });
          var requestOptions = {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: raw,
            redirect: 'follow'
          };
        return fetch("https://localhost:44342/api/order/EmployeeSpecification", requestOptions)
    },
    getTags: (category, slug) => {
        return axiosClient.get(`/get-tag`);
    },
    getArchives: (category, slug) => {
        return axiosClient.get(`/get-archive`);
    },
    handleSearch: (keyword) => {
        return axiosClient.get(`/search`, {
            params: {
                search: keyword
            }
        }
        );
    },
    categoryArchives: (slug) => {
        return axiosClient.get(`/category-archives/${slug}`);
    },
    monthlyArchives: (year, month) => {
        return axiosClient.get(`/monthly-archives/${year}/${month}`);
    },
    tagArchives: (slug) => {
        return axiosClient.get(`/tag-archives/${slug}`);
    },
    galleryArchives: () => {
        return axiosClient.get(`/gallery`);
    },
}
export default webApi;