import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Details = ({ products }) => {
  const { id } = useParams();
  return (
    <BoxProduct>
      <h3>{products[id - 1].title}</h3>
      <p>${products[id -1].price}</p>
      <p>🛒 </p>
    </BoxProduct>
  );
};

export default Details;
const BoxProduct = styled.h1`
width: 700px;
background-color: #fff;
margin: 0 auto;
margin-top: 2rem;
padding: 20px 20px;
display: flex;
justify-content: space-between;
-webkit-box-shadow: 5px -6px 8px 2px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 5px -6px 8px 2px rgba(34, 60, 80, 0.2);
box-shadow: 5px -6px 8px 2px rgba(34, 60, 80, 0.2);

h3{
    color: #0e0ea9;
}
p{
    color: #0e0ea9;
}
`;
