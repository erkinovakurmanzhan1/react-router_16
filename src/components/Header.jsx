import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";



const Header = () => {

    
  return (
    <Container>
      <NavList>
        <h1>LOGO</h1>
        <ul>
          <li>
            <NavLink to="/products"    style={({ isActive }) => ({
                  color: isActive ? "#000000" : '#FFFF',textDecoration:'none'

                })}>Products</NavLink>
          </li>
          <li>
            <NavLink to="myCart"    style={({ isActive }) => ({
                  color: isActive ? "#000000" : "#FFFF",textDecoration:'none'
                })}>My Cart</NavLink >
          </li>
          <li>
            <NavLink to="myOrders"   style={({ isActive }) => ({
                  color: isActive ? "#0c0512" : "#FFFF",
                  textDecoration:'none'
                })}>My Order</NavLink >
          </li>
        </ul>
      </NavList>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  height: 100px;
  background-color: #3a37cf;
  color: #ffff;
`;

const NavList = styled.nav`
  display: flex;
  justify-content: space-around;
  padding-top: 2.1rem;
  ul {
    display: flex;
    font-size: 23px;
    gap: 50px;
    list-style: none;
  }
 
`;

