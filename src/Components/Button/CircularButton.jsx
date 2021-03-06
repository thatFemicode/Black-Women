import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { bounce } from './animtion';
const ButtonStyled = styled.button`
  font-size: 1rem;
  padding: 0.25rem 0.85rem;
  border-radius: 50%;
  border-color: transparent;
  color: #fff;
  background-color: #000;
  cursor: none;
  text-transform: capitalize;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 70px;
  height: 70px;
  @media (max-width: ${({ theme }) => theme.make}) {
    width: 60px;
    height: 60px;
    font-size: 0.8rem;
    padding: 0.15rem 0.65rem;
  }
`;
const CircularButton = ({ name }) => {
  let icon = useRef(null);
  useEffect(() => {
    bounce(icon);
  }, []);
  return (
    <ButtonStyled
      ref={(el) => {
        icon = el;
      }}
    >
      {name}
    </ButtonStyled>
  );
};

export default CircularButton;
