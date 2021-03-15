import React from 'react';
import {
  BiSearchAlt
} from 'react-icons/bi';
import Search from './../images/logo/search-new.png'
import styled from 'styled-components';
import { primaryColor } from '../config';

export const Input = (props?: any) => {
  return (
    <InputStyle >
      <InputBoxStyle placeholder='Search...' />
      <img src={Search} width='19' height='19' alt='search' />
    </InputStyle>
  )
}

const InputStyle = styled.div`
  display: flex;
  justify-content: 'center';
  align-items: 'center';
  text-align: 'center';
  width: 250px;
  outline-color:${primaryColor};
  background-color: ${primaryColor};
  background: rgb(0, 59, 0) none repeat scroll 0% 0%;
  border: medium none;
  padding: 10px 20px 10px 10px;
  border-radius: 2px;
  font-size: 1rem;
  transition: all 120ms ease-in-out 0s;
  outline-color: rgb(0, 187, 0);
  color: ${primaryColor};
  &::placeholder {
    font-weight: 900;
    color: red;
  }
  @media (max-width: 895px) {
  width: 150px;
      }
`;
const InputBoxStyle = styled.input`
  width: 100%;
  background: rgb(0, 59, 0);
  border: 0;
  color: ${primaryColor};
  outline: none;
  outline-color: rgb(0, 255, 0);
`;
// 30px

