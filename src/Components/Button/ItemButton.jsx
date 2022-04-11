import React from 'react';
import styled from 'styled-components';
const ButtonStyled = styled.button`
  font-size: 1.4rem;
  padding: 0.25rem 0.85rem;
  border-radius: 9px 0 9px 0px;
  border-color: transparent;
  color: #000;
  background-color: #fff;
  mix-blend-mode: difference;
  cursor: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  max-width: 200px;
  @media (max-width: ${({ theme }) => theme.mobil}) {
    font-size: 0.9rem;
  }
  @media (max-width: ${({ theme }) => theme.se}) {
    font-size: 0.7rem;
    padding: 0.15rem 0.55rem;
  }
`;
const ItemButton = ({ name }) => {
  return <ButtonStyled>{name}</ButtonStyled>;
};

export default ItemButton;
