import React from 'react';
import styled from 'styled-components';

const Button = ({children,onClick}) => {
    return (
        <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
    );
};

export default Button;


const ButtonStyle = styled.button`
  background-color: #139898;
  width: 10%;
  height: 50px;
  margin-top: 1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  color: #ffff;
  margin-left: 22rem;
`;