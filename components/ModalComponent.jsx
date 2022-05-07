import React from 'react';
import {
    Box,
    Modal,
    Typography
} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ModalComponent = (props) => {

    return (
        <div>
            <Modal
                open={props.isOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{width:props.widthModal}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {props.ModelTitle}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.children}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalComponent