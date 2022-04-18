import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { bounce } from './animtion';

const ButtonStyled = styled.button`
  font-size: 1rem;
  padding: 0.25rem 0.85rem;
  border-radius: 9px 0 9px 0px;
  border-color: transparent;
  color: #000;
  background-color: #fff;
  mix-blend-mode: difference;
  cursor: none;
  padding: 0.25rem 0.85rem;
  border-radius: 50%;
  border-color: transparent;
  cursor: none;
  text-transform: capitalize;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  @media (max-width: ${({ theme }) => theme.make}) {
    width: 60px;
    height: 60px;
    font-size: 0.8rem;
    padding: 0.15rem 0.65rem;
  }

  @media (max-width: ${({ theme }) => theme.mobil}) {
    font-size: 0.9rem;
  }
  @media (max-width: ${({ theme }) => theme.se}) {
    font-size: 0.7rem;
    padding: 0.15rem 0.55rem;
  }
`;
const ItemButton = ({ name }) => {
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

export default ItemButton;
