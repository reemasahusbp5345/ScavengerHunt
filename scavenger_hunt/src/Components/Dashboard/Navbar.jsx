import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Notification from "./Notification";
import {useDispatch, useSelector} from "react-redux";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { handleLoggedOut } from "../../Redux/action";

const NavbarWrapper = styled.header`
  width: 50%;
  height:60px;
  padding-left: 50%;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #333333;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1{
    position:absolute;
    left:0;
    margin-left:20px;
    
  }

  a {
    text-decoration: none;
    color: whitesmoke;
    position:absolute;
    right:0;
    margin-right:100px;
  }
`;

export const Navbar = () => {
  const dispatch=useDispatch()
  const loggedUser=useSelector(state=>state.loggedUser)
  const handleLogout=()=>{
    dispatch(handleLoggedOut())
  }
  return (
    <NavbarWrapper>
        <h1>SCAVENGER-HUNT</h1>
        <div style={{marginRight:"-300px",cursor:"pointer"}} ><Notification/></div>
        <p>< AccountCircleIcon/> Hi, {loggedUser}</p>
      <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
    </NavbarWrapper>
  );
};
