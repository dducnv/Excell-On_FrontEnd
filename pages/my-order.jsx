import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Layout from '../components/user_layout/Layout';
import orderApi from '../api/orderApi';
import { Tab, Disclosure } from '@headlessui/react'
import _ from 'lodash';
import ModalComponent from '../components/ModalComponent';
import { ChevronUpIcon } from '@heroicons/react/solid'
import DataTable from 'react-data-table-component';
import CurrencyFormat from 'react-currency-format';
import toast, { Toaster } from 'react-hot-toast';
import PaypalButtonComponent from '../components/user_layout/components/PaypalButtonComponent';

import {
  PayPalScriptProvider, PayPalButtons
} from "@paypal/react-paypal-js";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const OrderUser = () => {
  const [orders, setOrders] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenPayment, setModalOpenPayment] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});
  const [TransactionHistory, setTransactionHistory] = useState([]);
  const [Transaction, setTransaction] = useState({});
  const [loading, setLoading] = useState(true);
  const colunms = [
    {
      name: 'ID',
      selector: row => row.Account.Id,
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
  const colunmsTransactionHistory = [
    {
      name: 'ID',
      selector: row => row.Id,
    },
    {
      name: 'Contact ID',
      selector: row => row.ContractID,
    }
    ,
    {
      name: 'Money Sent',
      selector: row => <CurrencyFormat value={row.PriceSent} displayType={'text'} thousandSeparator={true} prefix={'$'} />,
    }
    ,
    {
      name: 'In Dept',
      selector: row => <CurrencyFormat value={row.InDebt} displayType={'text'} thousandSeparator={true} prefix={'$'} />,
    }
    ,
    {
      name: 'Created At',
      selector: row => row.CreatedAt,
    }
    ,
    {
      name: 'Status',
      selector: row => row.Status,
    }
  ];
  const fetchOrder = async () => {
    const order = await orderApi.orderByUserID('US0003').then(res => {
        setLoading(false);
      return res;
    });
    const transactionHistory = await orderApi.getTransactionHistory('US0003');
    setOrders(order);
    setTransactionHistory(transactionHistory);

  }
  useEffect(() => {
    fetchOrder();
  }, [])
  const modalPayment = (item) => {
    setModalOpenPayment(true);
    setTransaction(item);
  }
  const renderContract = () => {
    return _.filter(orders, { Status: 0 }).map((item, index) => {
      var priceSent = 0;
      item.Contracts[0].TransactionHistories.forEach(element => {
        priceSent += element.PriceSent;
      });
      var detailtContract = {
        ContractID: item.Contracts[0].Id,
        GrandTotal: item.GrandTotal,
        PriceSent: priceSent,
        InDebt: item.GrandTotal - priceSent,
      }
      return (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.CreatedAt}- ID: {item.Id}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <section className="py-10">
                <div className='flex justify-end'>
                  {item.GrandTotal - priceSent > 0 &&
                    <button
                      type="button"
                      onClick={() => modalPayment(detailtContract)}
                      className="bg-orange-400 mb-3 py-2 px-3 border border-gray-300 text-white rounded-md shadow-sm text-sm leading-4 font-medium hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-orange-500"
                    >
                      Payment
                    </button>
                  }

                </div>
                <div className="max-w-5xl mx-auto border">
                  <article className="overflow-hidden">
                    <div className="bg-[white] rounded-b-md">
                      <div className="p-9">
                        <div className="space-y-6 text-slate-700">
                          <p className="text-xl font-extrabold tracking-tight uppercase font-body">
                            contract
                          </p>
                        </div>
                      </div>
                      <div className="p-9">
                        <div className="flex w-full">
                          <div className="grid grid-cols-4 gap-12">
                            <div className="text-sm font-light text-slate-500">
                              <p className="text-sm font-normal text-slate-700">
                                Customer Infomation:
                              </p>
                              <p>{item.Account.FullName}</p>
                              <p>{item.Account.PhoneNumber}</p>
                              <p>{item.Account.Email}</p>
                              <p>{item.Account.Address}</p>
                            </div>
                            <div className="text-sm font-light text-slate-500">
                              <p className="text-sm font-normal text-slate-700">Order Details</p>
                              <p>ID: {item.Id}</p>
                              <p>Created At: {item.CreatedAt}</p>
                              <p>Status: {item.Status == 0 ?"Processing":"Pending"}</p>
                            </div>
                            <div className="text-sm font-light text-slate-500">
                              <p className="text-sm font-normal text-slate-700">Grand Total</p>
                              <p> <CurrencyFormat value={item.GrandTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>

                              <p className="mt-2 text-sm font-normal text-slate-700">
                                Paid
                              </p>
                              <p> <CurrencyFormat value={priceSent} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>

                              <p className="mt-2 text-sm font-normal text-slate-700">
                                In Dept
                              </p>
                              <p> <CurrencyFormat value={item.GrandTotal - priceSent} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>

                            </div>
                            <div className="text-sm font-light text-slate-500">
                              <p className="text-sm font-normal text-slate-700">Start Date</p>
                              <p>{item.Contracts[0].StartDate}</p>
                              <p className="mt-2 text-sm font-normal text-slate-700">End Date</p>
                              <p>{item.Contracts[0].EndDate}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-9">
                        <div className="flex flex-col mx-0 mt-8">
                          <table className="min-w-full divide-y divide-slate-500">
                            <thead>
                              <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0">
                                  Service Name
                                </th>
                                <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                                  Employees  Booked
                                </th>
                                <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                                  Start Date
                                </th>
                                <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                                  End Date
                                </th>
                                <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                                  Specification
                                </th>
                                <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0">
                                  Unit Price
                                </th>
                                <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0">
                                  Total
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {_.map(item.OrderDetails, (orderDetailsItem, index) => (
                                <tr key={index} className="border-b border-slate-200">
                                  <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                    <div className="font-medium text-slate-700">{orderDetailsItem.Service.Name}</div>

                                  </td>
                                  <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                    {orderDetailsItem.Qty}
                                  </td>
                                  <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                    {orderDetailsItem.StartDate}
                                  </td>
                                  <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                    {orderDetailsItem.EndDate}
                                  </td>
                                  <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                    {orderDetailsItem.Specification.Name}
                                  </td>
                                  <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                    <CurrencyFormat value={orderDetailsItem.Service.Price} displayType={'text'} thousandSeparator={true} prefix={'$'} />

                                  </td>
                                  <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                    <CurrencyFormat value={orderDetailsItem.Service.Price * orderDetailsItem.Qty} displayType={'text'} thousandSeparator={true} prefix={'$'} />

                                  </td>
                                </tr>
                              ))}


                            </tbody>
                            <tfoot>
                              <tr>
                                <th scope="row" colSpan="7" className="hidden font-bold pt-6 pl-6 pr-3 text-sm  text-right text-slate-500 sm:table-cell md:pl-0">
                                  Grand Total:
                                </th>

                                <td className="pt-6 pl-1 pr-2 text-sm text-right text-slate-800 font-bold sm:pr-6 md:pr-0">
                                  <CurrencyFormat value={item.GrandTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} />

                                </td>
                              </tr>


                            </tfoot>
                          </table>
                        </div>
                      </div>

                      <div className="mt-10 p-9">
                        <div className="border-t pt-9 border-slate-200">
                          <div className="text-sm font-light text-slate-700">
                            <p>
                              Payment terms are 14 days. Please be aware that according to the
                              Late Payment of Unwrapped Debts Act 0000, freelancers are
                              entitled to claim a 00.00 late fee upon non-payment of debts
                              after this time, at which point a new invoice will be submitted
                              with the addition of this fee. If payment of the revised invoice
                              is not received within a further 14 days, additional interest
                              will be charged to the overdue account and a statutory rate of
                              8% plus Bank of England base of 0.5%, totalling 8.5%. Parties
                              cannot contract out of the Act’s provisions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </section>
            </Typography>
          </AccordionDetails>
        </Accordion>
      )
    })
  }
  const detailsOrder = (item) => {
    setModalOpen(true)
    if (item !== null) {
      setOrderDetails(item);
    }
  }

  return (
    <Layout>
      <Toaster />
      <div className="max-w-6xl m-auto min-h-screen py-10">
        <Tab.Group>
          <div className="flex item-start justify-between w-full mt-10">
            <div className="flex flex-col lg:flex-row w-full items-start justify-start">
              <aside class="w-64" aria-label="Sidebar">
                <div class="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">

                  <Tab.List>
                    <ul class="space-y-2">
                      <li className='w-full'>
                        <Tab
                          className={({ selected }) =>
                            classNames(
                              'flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ',
                              selected
                                ? 'bg-gray-100'
                                : ''
                            )
                          }>
                          <span class="ml-3">My Order</span>
                        </Tab>
                      </li>
                      <li className='w-full'>
                        <Tab
                          className={({ selected }) =>
                            classNames(
                              'flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ',
                              selected
                                ? 'bg-gray-100'
                                : ''
                            )
                          }                        >
                          <span class="ml-3">Contract</span>
                        </Tab>
                      </li>
                      <li className='w-full'>
                        <Tab
                          className={({ selected }) =>
                            classNames(
                              'flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ',
                              selected
                                ? 'bg-gray-100'
                                : ''
                            )
                          }                        >
                          <span class="ml-3">Transaction History</span>
                        </Tab>
                      </li>
                    </ul>
                  </Tab.List>

                </div>
              </aside>
              <div className="w-full py-4" >
                <div className=' p-3 w-full  bg-gray-100 rounded-2xl border'>
                  <Tab.Panels>
                    <Tab.Panel>
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                          className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Count Service
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Grand Total
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Created At
                            </th>

                            <th scope="col" className="px-6 py-3">
                              Details
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {loading ? (
                            <tr>
                              <td colSpan={6} className="flex justify-center py-3">
                                <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                  </path>
                                </svg>
                              </td>
                            </tr>
                          )
                            : (
                              <>
                                {_.map(orders, (item, index) => (
                                  <tr key={index}>
                                    <td className="px-6 py-4 text-gray-900 dark:text-white">{item.Id}</td>
                                    <td className="px-6 py-4 text-gray-900 dark:text-white">{item.OrderDetails.length}</td>
                                    <td className="px-6 py-4 text-gray-900 dark:text-white"><CurrencyFormat value={item.GrandTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                    <td className="px-6 py-4 text-gray-900 dark:text-white">{item.Status == 1 ?"Pending" :"Processing"}</td>
                                    <td className="px-6 py-4 text-gray-900 dark:text-white">{item.CreatedAt}</td>
                                    <td className="px-6 py-4 text-gray-900 dark:text-white">
                                      <button
                                        onClick={() => detailsOrder(item)}
                                        type="button"
                                        className="bg-orange-400 py-2 px-3 border border-gray-300 text-white rounded-md shadow-sm text-sm leading-4 font-medium hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-orange-500"
                                      >
                                        Details
                                      </button>
                                    </td>

                                  </tr>
                                ))}
                              </>
                            )}

                        </tbody>
                      </table>
                      <ModalComponent isOpen={modalOpen} widthModal={900} isClose={modalOpen} ModalTitle="test modal">
                        <h1 className="text-xl font-bold">Customer ID: {orderDetails && orderDetails.AccountID}</h1>
                        <h1 className="text-xl font-bold">Grand Total: <CurrencyFormat value={orderDetails && orderDetails.GrandTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h1>
                        <h1 className="text-xl font-bold mb-4">Deposit: <CurrencyFormat value={orderDetails && orderDetails.Deposit} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h1>
                        {_.map(orderDetails.OrderDetails, (item, index) => {
                          console.log(item)
                          return(
                          <div key={index} className="mb-3">
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>{item.Service.Name} - <CurrencyFormat value={item.Service.Price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
                                    <ChevronUpIcon
                                      className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                  </Disclosure.Button>
                                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    <h1 className="text-lg font-bold">Employees Booked: {item.Qty} Employees</h1>
                                    <h1 className="text-lg font-bold">Price: <CurrencyFormat value={item.Service.Price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h1>
                                    <h1 className="text-lg font-bold">Total: <CurrencyFormat value={item.Service.Price * item.Qty} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h1>
                                    <h1 className='text-lg font-bold mt-3'>List Employees:</h1>
                                    <DataTable
                                      columns={colunms}
                                      data={item.OrderDetails_Employees}
                                      fixedHeader
                                      fixedHeaderScrollHeight="300px"
                                      pagination={true}
                                      subHeaderAlign="left"
                                    />
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          </div>
                        )})}
                        <div className="flex justify-end">
                          <button
                            onClick={() => setModalOpen(false)}
                            type="button"
                            className="bg-orange-400 mt-3 py-2 px-3 border border-gray-300 text-white rounded-md shadow-sm text-sm leading-4 font-medium hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-orange-500"
                          >
                            close
                          </button>
                        </div>
                      </ModalComponent>
                    </Tab.Panel>
                    <Tab.Panel>
                      {renderContract()}
                    </Tab.Panel>
                    <Tab.Panel>
                      <DataTable
                        columns={colunmsTransactionHistory}
                        data={TransactionHistory}
                        fixedHeader
                        fixedHeaderScrollHeight="600px"
                        pagination={true}
                        subHeaderAlign="left"
                      />
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </div>
            </div>
          </div>
        </Tab.Group>
      </div>
      <ModalComponent isOpen={modalOpenPayment} widthModal={650} isClose={modalOpenPayment} ModalTitle="test modal">
        <div>
          <h1 className="text-xl font-bold">Grand Total: <CurrencyFormat value={Transaction && Transaction.GrandTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h1>
          <h1 className="text-xl font-bold">Money Sent: <CurrencyFormat value={Transaction && Transaction.PriceSent} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h1>
          <h1 className="text-xl font-bold mb-4">In Dept: <CurrencyFormat value={Transaction && Transaction.InDebt} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h1>
        </div>
        <PayPalScriptProvider options={{ "client-id": "AfGLbRweGTWUtjBVKy2qicCK94pTS5wyYVPLhHUVFp5n9siQ9MToXnxGxR2BlmCIc98g5x4E6BbWAVDJ" }}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: Transaction.InDebt,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                if (details.status === "COMPLETED") {
                  const result = orderApi.paymentOrder(Transaction.ContractID, Transaction.InDebt).then(res => {
                    if (res.status == 200) {
                      setModalOpenPayment(false);
                      fetchOrder();
                      return true;
                    } else {
                      return false;
                    }
                  }).catch(err => {
                    return false;
                  });

                  toast.promise(
                    result,
                    {
                      loading: 'Paying...',
                      success: <b>Payment success!</b>,
                      error: <b>Error System.</b>,
                    }
                  );
                } else {
                  toast.error("Payment Error.")
                }
              });
            }}
          />
        </PayPalScriptProvider>
        <button onClick={() => setModalOpenPayment(false)}>close</button>
      </ModalComponent>
    </Layout>
  )
}

export default OrderUser