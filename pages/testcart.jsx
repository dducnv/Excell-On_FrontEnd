
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
     
    </div>
  )
}

export default testcart