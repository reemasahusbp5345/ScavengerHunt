import React, { useState } from "react";
import { Navbar } from "./Navbar";
import styles from "./dashboard.module.css";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { searchPincode } from "../../Redux/action";
import DisplayCard from "./DisplayCard";

const Dashboard = (props) => {
  const [contact, setContact] = useState("");
  const [pincode, setPincode] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchPincode(pincode));
  };
  return (
    <div>
      <Navbar />
      <div className={styles.cont}>
        <div style={{ height: 800 }}></div>
        <div className={styles.box}>
          <div>
            <TextField
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              label="Enter Contact Number"
            />
          </div>
          <div>
            <TextField
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              label="Enter Pincode"
            />
          </div>
          <div>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      <div style={{ marginTop: -500 }}>
        <DisplayCard />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
