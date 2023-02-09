import React from "react";
import styled from "styled-components";

const CartPage = () => {
  return (
    <div>
      <Cart>
        <TitleCart>My Cart bla bla bla bla bla</TitleCart>
      </Cart>
    </div>
  );
};

export default CartPage;
const TitleCart=styled.h1`
  color: #0e0ea9;
  text-align: center;
  padding-top: 2rem;
`

const Cart = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  width: 700px;
  height: 200px;
  background-color: #fff;
`;
