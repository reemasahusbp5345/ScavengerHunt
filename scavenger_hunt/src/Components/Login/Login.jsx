import React, { useState } from "react";
import { Navbar } from "./Navbar";
import styles from "./login.module.css";
import { Snackbar, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { saveLoggedData } from "../../Redux/action";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const Login = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const data = useSelector((state) => state.data);
  const handleLogin = () => {
    const userExists = data.find((item) => {
      return item.BranchIncharge === username;
    });
    if (userExists) {
      dispatch(saveLoggedData(username));
      history.push("/dashboard");
    } else {
      handleClick();
    }
  };
  return (
    <div>
      <Navbar />
      <div className={styles.cont}>
        <div className={styles.imgCont}>
          <img
            src="https://cdn.dribbble.com/users/462448/screenshots/15022702/media/ee564926ae4204a5fb0de2e43f6bca0a.jpg?compress=1&resize=800x600"
            alt="banner"
          />
        </div>
        <div className={styles.loginCont}>
          <h2>Log In</h2>
          <div className={styles.form}>
            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Enter Your Username"
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Enter Your Password"
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
      <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Please Check Your Credentials !
        </Alert>
      </Snackbar>
      </div>
    </div>
  );
};

export default Login;
