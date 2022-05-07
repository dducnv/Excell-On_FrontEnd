import axiosClient from "./axiosClient";
import Moment from "moment";
const webApi = {
    employeeSpecification: (id, StartDate, EndDate) => {
        var raw = JSON.stringify({
            "SpecificationsID": id,
            "StartDate": Moment(StartDate).format("MM/DD/yyyy").toString(),
            "EndDate": Moment(EndDate).format("MM/DD/yyyy").toString()
          });
        return axiosClient.post("api/order/EmployeeSpecification", raw, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "localhost:3000"


            }
        })
    },
}
export default webApi;