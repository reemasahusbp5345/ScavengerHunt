import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.header`
  width: 50%;
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
      margin-right:-500px;
    text-decoration: none;
    color: whitesmoke;
  }
`;

export const Navbar = () => {
  return (
    <NavbarWrapper>
        <h1>SCAVENGER-HUNT</h1>
      <NavLink to="/admin">Admin</NavLink>
    </NavbarWrapper>
  );
};
