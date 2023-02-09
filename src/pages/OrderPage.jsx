import React from "react";
import styled from "styled-components";

const OrderPage = () => {
  return (
    <div>
      <Order>
        <OrderTitle>My Order bla bla bla bla bla</OrderTitle>
      </Order>
    </div>
  );
};

export default OrderPage;

const OrderTitle = styled.h1`
  color: #0e0ea9;
  text-align: center;
  padding-top: 2rem;
`;

const Order = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  width: 700px;
  height: 200px;
  background-color: #fff;
`;
