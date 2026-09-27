import React from 'react';
import { AppBar, Button, Dialog, IconButton, Slide, Toolbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const resumeUrls = import.meta.glob('../../resumes/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ResumeDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" className="btn-resume" onClick={handleClickOpen}>
        View my resume
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 2, flex: 1 }}>
              {`${props.student.firstName} ${props.student.lastName}`}
            </Typography>
          </Toolbar>
        </AppBar>
        <embed
          title={`${props.student.firstName} ${props.student.lastName} resume`}
          src={resumeUrls[`../../resumes/${props.student.resume}`]}
          type="application/pdf"
          width="100%"
          height="800px"
        />
      </Dialog>
    </div>
  );
}
