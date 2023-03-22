import React from 'react';
import Iframe from 'react-iframe'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: "gray",
  }
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">{`${props.student.firstName} ${props.student.lastName} Final Capstone`}</DialogTitle>
      <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <Iframe url={`https://www.youtube.com/embed/${props.student.capstoneURL}`}
        width="600"
        height="360"
        className="capstone-vid"
        display="initial"
        position="relative"
        allowfullscreen
        />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function CapstoneDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" className="btn-capstone" onClick={handleClickOpen}>
        Capstone Video Demo
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} student={props.student}/>
    </div>
  );
}
