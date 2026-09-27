import React from 'react';
import { Button, Dialog, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function CapstoneDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" className="btn-capstone" onClick={handleClickOpen}>
        Capstone Video Demo
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="capstone-dialog-title" open={open}>
        <DialogTitle id="capstone-dialog-title">
          {`${props.student.firstName} ${props.student.lastName} Final Capstone`}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 10, top: 10, color: 'gray' }}
        >
          <CloseIcon />
        </IconButton>
        <iframe
          title={`${props.student.firstName} ${props.student.lastName} capstone video`}
          src={`https://www.youtube.com/embed/${props.student.capstoneURL}`}
          width="600"
          height="360"
          className="capstone-vid"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Dialog>
    </div>
  );
}
