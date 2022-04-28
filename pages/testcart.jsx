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
}

export default testcart