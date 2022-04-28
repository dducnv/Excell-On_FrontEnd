<<<<<<< HEAD
import React from 'react'
import ModalComponent from '../components/ModalComponent'
import {
    InputLabel,
    MenuItem,
    Button,
    FormControl,
    TextField
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const testcart = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <ModalComponent isOpen={open} isClose={open} ModalTitle="test modal">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Color</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        className="text-gray-800 mb-2"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Red</MenuItem>
                        <MenuItem value={20}>Blue</MenuItem>
                        <MenuItem value={30}>Black</MenuItem>
                    </Select>
                    <TextField id="outlined-basic" label="Employee" variant="outlined" />
                </FormControl>

                <div className="flex">
                <Button className="bg-blue-800 mt-2 mr-2 text-gray-200 font-sans hover:text-gray-50 hover:bg-blue-600"  onClick={handleClose}>close</Button>
                <Button className="bg-blue-800 mt-2 mr-2 text-gray-200 font-sans hover:text-gray-50 hover:bg-blue-600" onClick={handleClose}>Add to cart</Button>
                </div>
            </ModalComponent>
        </div>
    )
=======
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

const testcart = () => {
  return (
    <>

    </>
  )
>>>>>>> 100495de28fb1820b3efeb1171b1c3d53fc11b23
}

export default testcart