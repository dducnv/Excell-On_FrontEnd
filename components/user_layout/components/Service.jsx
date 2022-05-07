import React, { useState, useEffect } from 'react';
import ModalComponent from '../../ModalComponent';
import Moment from 'moment';
import specificationsApi from '../../../api/specificationsApi';
import webApi from '../../../api/webApi';
import CurrencyFormat from 'react-currency-format';
import {
    InputLabel,
    MenuItem,
    FormControl,
    TextField,
} from '@mui/material';
import Select from '@mui/material/Select';
import toast, { Toaster } from 'react-hot-toast';
import { useCart } from "react-use-cart";
import CartPopup from '../CartPopup';
import Link from 'next/link';
const Service = (props) => {
    Moment.locale('vi');
    const { addItem } = useCart();
    const dateNow = new Date().toDateString();
    const dateFomatted = Moment(dateNow).format('yyyy-MM-DD');
    const [startDate, setStartDate] = useState(dateFomatted);
    const [endDate, setEndDate] = useState(Moment(dateNow).add(1, 'days').format('yyyy-MM-DD'));
    const [open, setOpen] = useState(false);
    const [employeeNumber, setEmployeeNumber] = useState(null);
    const [serviceDataCart, setServiceDataCart] = useState({})
    const [specifications, setSpecifications] = useState([]);
    const [specificationName, setSpecificationName] = useState('');
    const [specificationID, setSpecificationID] = useState(0);
    const [countSpecificationEpl, setCountSpecificationEpl] = useState(null);
    const [loadCountEmployee, setLoadCountEmployee] = useState(false);
    const [totalDay, setTotalDay] = useState(null);
    const [confirmInfo, setConfirmInfo] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        specificationsApi.getAll()
            .then(res => {
                setSpecifications(res)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    const getSpecificationByID = (id) => {
        specificationsApi.getByID(id)
            .then(res => {
                setSpecificationName(res.Name);
            }).catch(err => {
                console.log(err);
            })
    }
    const fetchDataEmployeeCount = async (id) => {
        await webApi.employeeSpecification(id, startDate, endDate)
            .then(result => {
                console.log(result);
                setLoadCountEmployee(false);
                setCountSpecificationEpl(result);
            })
            .catch(error => {
                setCountSpecificationEpl(null);
                console.log(error);
            });
    }
    const getStartDate = (StartDate) => {
        setStartDate(StartDate);
        setEndDate(Moment(StartDate).add(1, 'days').format('yyyy-MM-DD'));
        if (countSpecificationEpl != null && startDate != null && endDate != null) {
            getSpecificationByID(specificationID);
            fetchDataEmployeeCount(specificationID);
            setLoadCountEmployee(true)
        }
    }
    const CountDate = () => {
        var date1 = new Date(startDate);
        var date2 = new Date(endDate);
        var time = date2.getTime() - date1.getTime();
        var TotalDay = time / (1000 * 3600 * 24);
        setTotalDay(TotalDay);
    }
    const getEndDate = (EndDate) => {
        setEndDate(EndDate);
        if (countSpecificationEpl != null && startDate != null && endDate != null) {
            getSpecificationByID(specificationID);
            fetchDataEmployeeCount(specificationID);
            setLoadCountEmployee(true);
        }
    }
    const specificationSelect = (id) => {
        getSpecificationByID(id);
        setSpecificationID(id);
        fetchDataEmployeeCount(id);
    }
    const addToCartModel = (service) => {

        setOpen(true);
        setServiceDataCart(service);
    }
    const handleAddToCart = (e) => {
        e.preventDefault();
        if (startDate != null && endDate != null && specificationID != 0 && employeeNumber != null) {
            if (confirmInfo == true) {
                const orderDetails = {
                    id: specificationID + serviceDataCart.Id,
                    image: serviceDataCart.Image,
                    price: serviceDataCart.Price,
                    name: serviceDataCart.Name,
                    TotalDay: totalDay,
                    GrandTotal: (serviceDataCart.Price * employeeNumber) * totalDay,
                    SpecificationName: specificationName,
                    ServiceID: serviceDataCart.Id,
                    SpecificationID: specificationID,
                    Qty: employeeNumber,
                    StartDate: Moment(startDate).format('MM/DD/yyyy').toString(),
                    EndDate: Moment(endDate).format('MM/DD/yyyy').toString(),
                }
                addItem(orderDetails);
                setOpen(false);
                setOpenCart(true);

            } else {
                toast.error("Please confirm the information.")
            }
        } else {
            toast.error("Please enter full information.")
        }
    }
    const renderCountEmployee = () => {
        if (loadCountEmployee) {
            return (
                <>
                    <div class="bg-gray-200 w-full mb-2 h-16 p-3 overflow-hidden animate-pulse" />
                </>
            )
        }
        if (countSpecificationEpl === null && specificationName === '') {
            return <></>
        }
        return (
            <>
                <div className="mb-2">
                    <h3 className="text-lg font-medium" >Find <span className="text-indigo-600 font-semibold">{specificationName}</span> employees</h3>
                    <h3 className="text-lg font-medium">From <span className="text-indigo-600 font-semibold">{startDate}</span> to <span className="text-indigo-600 font-semibold">{endDate}</span></h3>
                </div>
            </>
        )
    }
    const checkEmployeeNumber = (e) => {
        CountDate();
        if (employeeNumber > countSpecificationEpl || employeeNumber < 1) {
            toast.error("Not enough employee for you, please re-enter.")
        }
    }
    const handleOpenCart = (e) => {
        setOpenCart(e)
    }
    return (
        <>
            <div>
                <div className="bg-white dark:bg-gray-600 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                    <Toaster />
                    <div className="mb-12 space-y-4">
                        <h3 className="text-2xl font-semibold dark:text-gray-200 text-gray-800">
                            {props.name}
                        </h3>
                        <h3>Price: <CurrencyFormat value={props.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> for 1 employee / 1 day </h3>
                        <p className="mb-6 dark:text-gray-200 text-gray-800">{props.desc}</p>
                        {localStorage.getItem('user-token') || localStorage.getItem('user-token') !== null ?

                            <a onClick={() => addToCartModel(props.item)} className="block font-medium cursor-pointer  hover:text-indigo-400 text-indigo-600 dark:text-indigo-400">Book Now</a>

                            :
                            <Link href={"/user/login"}>
                                <a className="block font-medium cursor-pointer  hover:text-indigo-400 text-indigo-600 dark:text-indigo-400">Login</a>
                            </Link>
                        }
                    </div>
                    <img src={props.image} className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600" />
                </div>
                <ModalComponent isOpen={open} widthModal={650} isClose={open} ModalTitle="test modal">

                    <div className="grid grid-cols-6 gap-3 mb-4">
                        <div className="col-span-6 sm:col-span-3">
                            <TextField
                                InputProps={{ inputProps: { min: dateFomatted, placeholder: "dd-mm-yyyy" } }}
                                onBlur={CountDate} className="w-full" onChange={value => getStartDate(value.target.value)} type="date" value={startDate} label="Start Date" variant="outlined" />

                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <TextField
                                InputProps={{ inputProps: { min: endDate, placeholder: "dd-mm-yyyy" } }}
                                onBlur={CountDate} onChange={value => getEndDate(value.target.value)} className="w-full" type="date" value={endDate} label="End Date" variant="outlined" />
                        </div>
                    </div>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Choose Specifications</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            label="Choose Specifications"
                            className="text-gray-800 mb-4"
                            onChange={value => specificationSelect(value.target.value)}
                        >
                            {specifications.map(specification => (
                                <MenuItem value={specification.Id}>{specification.Name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {renderCountEmployee()}
                    <TextField min={0} onBlur={checkEmployeeNumber} onChange={value => setEmployeeNumber(value.target.value)} id="outlined-basic" className="w-full" type="number" label="Employee" variant="outlined" />
                    {employeeNumber &&
                        <>
                            <div className="w-full  mt-4 bg-gray-50 border py-2 px-3 border-gray-200 rounded-md mb-2">
                                <p className="text-gray-500">Service Name: <span className="font-semibold">{serviceDataCart.Name}</span> </p>
                                <p className="text-gray-500">Number of employees: <span className="font-semibold">{employeeNumber}</span> </p>
                                <p className="text-gray-500">Service Unit Price: <span className="font-semibold"><CurrencyFormat value={serviceDataCart.Price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> / 1 Day for 1 Employee</span> </p>
                                <p className="text-gray-500">Total Price (Price x Employees): <span className="font-semibold"><CurrencyFormat value={serviceDataCart.Price * employeeNumber} displayType={'text'} thousandSeparator={true} prefix={'$'} /> / 1 Day for {employeeNumber} Employees</span> </p>
                                <p className="text-gray-500">Start Date: <span className="font-semibold">{startDate}</span> </p>
                                <p className="text-gray-500">End Date: <span className="font-semibold">{endDate}</span> </p>
                                <p className="text-gray-500 font-semibold">Grand Total: <span className="font-bold text-indigo-600"><CurrencyFormat value={(serviceDataCart.Price * employeeNumber) * totalDay} displayType={'text'} thousandSeparator={true} prefix={'$'} /> / {totalDay} day for {employeeNumber} Employees</span> </p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        checked={confirmInfo}
                                        onChange={() => setConfirmInfo(!confirmInfo)}
                                        id="confirm"
                                        name="confirm"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="confirm" className="font-medium text-gray-700">
                                        Confirm all information is correct
                                    </label>
                                    <p className="text-gray-500">The information cannot be changed if you add a shopping cart.</p>
                                </div>
                            </div>
                        </>
                    }
                    <div className="flex mt-3 justify-end">
                        <button
                            onClick={handleClose}
                            type="button"
                            className="bg-orange-400 py-2 px-3 border border-gray-300 text-white rounded-md shadow-sm text-sm leading-4 font-medium hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-orange-500"
                        >
                            Close
                        </button>
                        <button
                            onClick={handleAddToCart}
                            type="button"
                            className="ml-3 bg-indigo-500 py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-white  hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Book
                        </button>
                    </div>
                </ModalComponent>
                <CartPopup closeCart={handleOpenCart} isOpen={openCart} />
            </div>
        </>
    )
}

export default Service