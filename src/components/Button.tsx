import React from 'react';
import { Link } from 'react-router-dom'
import { ButtonStyle } from '../assets/Styles'
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