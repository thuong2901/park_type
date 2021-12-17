import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);

    const { title, content, label, color, handleAction } = props;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLabel = () => {
        setOpen(false);
        handleAction();
    }

    return (
        <div>
            <Button variant="contained" color={color} onClick={handleClickOpen}>
                {label}
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="secondary" onClick={handleClose}>Đóng</Button>
                    <Button variant="contained" color={color} onClick={handleLabel}>{label}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}