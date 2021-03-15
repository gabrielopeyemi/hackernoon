import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { TypeArgs } from '../assets/Styles'
import { primaryColor } from '../config';
export interface PropsArgs {
  title?: string;
  link?: string;
  Outline?: boolean;
}
export const Button = (props: PropsArgs) => {
  return (
    <Link style={{ textDecoration: 'none' }} to={props.link ? props.link : '/'}> 
      <ButtonStyle  Outline={props.Outline}>
          {props.title}
      </ButtonStyle>
    </Link>
  )
}

const ButtonStyle = styled.button<TypeArgs>`
  color: #fff;
  background-color: ${primaryColor};
  font-family: "IBM Plex Mono", monospace;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  position: relative;
  outline: currentcolor none medium;
  line-height: 1.3;
  border: ${(p: any) => p.Outline ?  `2px solid rgb(33, 36, 40)` : `0px solid rgb(33, 36, 40)`};
  border-radius: 2px;
  font-size: .9rem;
  font-weight: bold;
  &:hover{
    background-color: rgb(98, 255, 134);
  }
  @media (max-width: 875px) {
    display: none
  }
`;