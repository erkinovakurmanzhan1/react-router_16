import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const ProductsPage = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((item) => {
          return (
            <LinkStyle to={`/products/${item.id}/details`}>
              <ContainerProducts>
                <Title>{item.title}</Title>
                <Button>Details</Button>
              </ContainerProducts>
            </LinkStyle>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsPage;

const Title = styled.h2`
  margin: 1.5rem 0 0 1.5rem;
  color: #0e0ea9;
  `;
const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ContainerProducts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  height: 80px;
  margin: 0 auto;
  margin-bottom: 1rem;
  margin-top: 2rem;
  background-color: #ffffff;
  -webkit-box-shadow: 5px -6px 8px 2px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 5px -6px 8px 2px rgba(34, 60, 80, 0.2);
box-shadow: 5px -6px 8px 2px rgba(34, 60, 80, 0.2);
`;
