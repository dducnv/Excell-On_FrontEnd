import axiosClient from "./axiosClient";
const orderApi = {
    getAll:()=>{
        return axiosClient.get('/api/order');
    },
    getByID:(id)=>{
        return axiosClient.get(`/api/order/${id}`);
    },
    addOrder:(Data) =>{
        return axiosClient.post("api/order/addorder",Data)
    },
    ConfirmOrder:(id) =>{
        return axiosClient.get(`api/order/ConfirmOrder/${id}`)
    },
    employeeForOrder:(info) =>{
        return axiosClient.post(`api/order/EmployeeForOrder`,info,{
            headers: {
                "Access-Control-Allow-Origin": "*"
                
            }
        })
    },
    orderByUserID:(id) =>{
        return axiosClient.get(`api/order/MyOrder/${id}`)
    },
    getTransactionHistory:(id) =>{
        return axiosClient.get(`api/order/TransactionHistories/${id}`)
    },
    getTransactionHistory:(id) =>{
        return axiosClient.get(`api/order/TransactionHistories/${id}`)
    },
    paymentOrder:(ContractID,PriceSend)=>{
        var data ={
            ContractID:ContractID,
            PriceSend:PriceSend
        }
        return axiosClient.post(`api/order/PaymentContract`,data);
    }
}

export default orderApi