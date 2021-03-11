import React from 'react'
import { InputStyle, InputBoxStyle } from '../assets/Styles'
import {
  BiSearchAlt
} from 'react-icons/bi';
import Search from './../images/logo/search-new.png'

export const Input = () => {
  return (
    <InputStyle>
      <InputBoxStyle placeholder='Search...' />
      <img src={Search} width='19' height='19' alt='search' />
    </InputStyle>
  )
}