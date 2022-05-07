import React, { useState, useEffect } from 'react'
import Layout from '../../../components/admin_layout/Layout';
import orderApi from '../../../api/orderApi';
import specificationApi from '../../../api/specificationsApi';
import _ from 'lodash';
import ModalComponent from '../../../components/ModalComponent';
import DataTable from 'react-data-table-component';

import toast, { Toaster } from 'react-hot-toast';
const OrderByID = (data) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [order, setOrder] = useState(data.data);
  const [orderDetails, setOrderDetails] = useState({});
  const [specificationEmployee, setSpecificationEmployee] = useState({});
  const [employeeSelect, setEmployeeSelect] = useState([]);
  const [searchByName, setSearchByName] = useState('');
  const [searchByID, setSearchByID] = useState('');
  const [filter, setFilter] = useState([]);
  console.log(order);
  const colunms = [{
    name: 'Select Employee',
    selector: row => (    <input id="checkbox-table-search-1" type="checkbox"
    value={row.AccountID}
    onClick={checkEmployeeSelect}
    onChange={(e) => {
      // add to list
      if (e.target.checked) {
        setEmployeeSelect([
          ...employeeSelect,
          {
            AccountID: row.AccountID,
          },
        ]);
      } else {
        // remove from list
        setEmployeeSelect(
          employeeSelect.filter((people) => people.id !== row.id),
        );
      }
    }}

    className="w-4 h-4 text-blue-600 bg-gray-100 employee-check border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />),
  },
  {
    name: 'ID',
    selector: row => row.AccountID,
  },
  {
    name: 'Full Name',
    selector: row => row.Account.FullName,
  }
    ,
  {
    name: 'Email',
    selector: row => row.Account.Email,
  }
    ,
  {
    name: 'Phone Number',
    selector: row => row.Account.PhoneNumber,
  }
  ];
  useEffect(() => {
    if (specificationEmployee != null && specificationEmployee.Specification_Employees != undefined) {
      if (searchByName != '') {
        const byName = specificationEmployee.Specification_Employees.filter(row => {
          return row.Account.FullName.toLowerCase().includes(searchByName.toLowerCase())
        });
        setFilter(byName);

      }
      if (searchByID != '') {
        const byID = specificationEmployee.Specification_Employees.filter(row => {
          return row.AccountID.toLowerCase().includes(searchByID.toLowerCase())
        });
        setFilter(byID);
      }


    }

  }, [searchByName, searchByID])
  const addEmployeeModal = async (item) => {
    console.log(employeeSelect);
    setModalOpen(true);
    await specificationApi.getByID(3).then(res => {
      setSpecificationEmployee(res);
      setFilter(res.Specification_Employees);
    })

    console.log(item);
    setOrderDetails(item);
  }
  const checkEmployeeSelect = (e) => {
    if (employeeSelect.length + 1 > orderDetails.Qty) {
      toast.error("Selected too required.")
    }
    if(employeeSelect.length == 0){
      setEmployeeSelect([]);
    }
  }
  const addEmployeeForOrder =  () => {
    if(employeeSelect.length == 0 || employeeSelect.length < orderDetails.Qty){
      toast.error("Please select enough for order.")
    }else{
      const info = {
        "OrderDetailsID": orderDetails.OrderID,
        "Employee": employeeSelect,
      };
     const result =  orderApi.employeeForOrder(info).then(res => {
        setModalOpen(false);
        if (res.status == 200) {
          return true
         
        }
      })
      toast.promise(
        result,
        {
            loading: 'Adding...',
            success: <b>Add success!</b>,
            error: <b>Error System.</b>,
        }
    );
    }
   
  }

  const renderOrderDetails = () => {
    return (
      _.map(order.OrderDetails, (item, index) => (
        <tr className='border-b' key={index}>
          <td className="px-6 py-4 text-gray-900 dark:text-white">{item.Id}</td>
          <td className="px-6 py-4 text-gray-900 dark:text-white">{item.Service.Name}</td>
          <td className="px-6 py-4 text-gray-900 dark:text-white">{item.Specification.Name}</td>
          <td className="px-6 py-4 text-gray-900 dark:text-white">{item.Qty}</td>
          <td className="px-6 py-4 text-gray-900 dark:text-white">{item.Service.Price}</td>
          <td className="px-6 py-4 text-gray-900 dark:text-white">{item.Service.Price * item.Qty}</td>
          <td className="px-6 py-4 text-gray-900 dark:text-white">{item.StartDate}</td>
          <td className="px-6 py-4 text-gray-900 dark:text-white">{item.EndDate}</td>
          <td className="px-6 py-4 text-gray-900 dark:text-white">
            <button onClick={() => addEmployeeModal(item)} className='p-2 bg-gray-50 rounded-md text-gray-600'>Add Employee</button>
          </td>
        </tr>
      ))

    )
  }

  return (
    <Layout>
      <Toaster />
      <div className="px-6 pt-6 2xl:container   bg-white dark:bg-gray-800">
        <div>
          <h1 className="text-lg font-bold">Order ID: <span className="text-gray-600">{order.Id}</span> </h1>
          <h1 className="text-lg font-bold">Grand Total: <span className="text-gray-600">{order.GrandTotal}</span> </h1>
          <h1 className="text-lg font-bold">Deposit: <span className="text-gray-600">{order.Deposit}</span> </h1>
          <h1 className="text-lg font-bold">Full Name: <span className="text-gray-600">{order.Account.FullName}</span> </h1>
          <h1 className="text-lg font-bold">Phone Number: <span className="text-gray-600">{order.Account.PhoneNumber}</span> </h1>
          <h1 className="text-lg font-bold">Email: <span className="text-gray-600">{order.Account.Email}</span> </h1>
          <h1 className="text-lg font-bold">Address: <span className="text-gray-600">{order.Account.Address}</span> </h1>
        </div>
        <div className="w-full">
          <table className=" text-sm text-left mt-3 text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Service Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Specification
                </th>
                <th scope="col" className="px-6 py-3">
                  Required Employee
                </th>
                <th scope="col" className="px-6 py-3">
                  Unit Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Grand Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Start Date
                </th>
                <th scope="col" className="px-6 py-3">
                  End Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Add Employees
                </th>

              </tr>
            </thead>
            <tbody>
              {renderOrderDetails()}
            </tbody>
          </table>
          <ModalComponent isOpen={modalOpen} isClose={modalOpen} widthModal={850}>

            <div className="w-full p-2 ">
              <h1 className="mb-2 font-bold">Employees: {orderDetails.Specification && orderDetails.Specification.Name}</h1>
              <h2>Selected:{employeeSelect.length}</h2>
              <DataTable
                columns={colunms}
                data={filter}
                fixedHeader
                fixedHeaderScrollHeight="300px"
                pagination={true}
                subHeader
                subHeaderComponent={
                  <div className='flex items-center '>
                    <input type="text" onChange={value => setSearchByID(value.target.value)} className="py-2 px-3 text-base border-2 w-48 mr-3" value={searchByID} placeholder="Search By ID" />
                    <input type="text" onChange={value => setSearchByName(value.target.value)} className="py-2 px-3 text-base border-2 w-48 " value={searchByName} placeholder="Search By Name" />
                  </div>
                }
                subHeaderAlign="left"
              />

              <div className="flex mt-3 justify-end">
                <button
                  onClick={() => { setModalOpen(false); setEmployeeSelect([]) }}
                  type="button"
                  className="bg-orange-400 py-2 px-3 border border-gray-300 text-white rounded-md shadow-sm text-sm leading-4 font-medium hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-orange-500"
                >
                  Close
                </button>
                <button
                  onClick={addEmployeeForOrder}
                  type="button"
                  className="bg-orange-400 py-2 px-3 border border-gray-300 text-white rounded-md shadow-sm text-sm leading-4 font-medium hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-orange-500"
                >
                  Add Employee
                </button>

              </div>
            </div>

          </ModalComponent>
        </div>
      </div>
    </Layout >
  )
}
OrderByID.getInitialProps = async (req) => {
  const slug = req.query;
  const data = await orderApi.getByID(slug.id);
  return {
    data: data
  }
}
export default OrderByID