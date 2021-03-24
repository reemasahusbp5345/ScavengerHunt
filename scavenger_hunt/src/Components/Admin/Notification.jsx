import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Notification() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const adminData=useSelector(state=>state.adminAlert)
  return (
    <div>
      <button type="button" onClick={handleOpen}>
      <NotificationsNoneOutlinedIcon/>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {adminData.length===0 && <h2>No User is Searched for pincode</h2>}
            <p style={{color:"blue"}}>{adminData[adminData.length-1]}</p>
            <hr/>
             {adminData && adminData.reverse().filter((item,index)=>index>0 && index<3).map((item,index)=> <div key={index+1}>
               <p>{item}</p>
               <hr/>
             </div>)}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
