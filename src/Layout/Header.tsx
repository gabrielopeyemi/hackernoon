import React from 'react';
import LOGO from '../images/logo/hn-logo.png'
import { NavLeft, NavRight, Nav, NavLink, IconButton } from '../assets/Styles/index';
import { Button } from '../components/Button';
import { primaryColor } from '../config';
import { Input } from '../components/Input';
export default function Header(props: any) {

  const { darkMode, handleDarkMode } = props;
  return (
    <>
      <Nav style={{backgroundColor: primaryColor}}>
        <NavLeft>
          <img style={{width: '280px'}} src={LOGO} alt='logo'/>
        </NavLeft>
        <NavRight>
          <NavLink>
            <Input />
          </NavLink>
          <NavLink>
            <Button
              title='Start Writing'
              Outline={true}
            />
          </NavLink>
          <NavLink>
            <Button
              title='Log in'
              Outline={false}
            /> 
          </NavLink>
          <NavLink>
            <IconButton onClick={handleDarkMode} >
              <div>
                <i style={{
                  fontSize: '30px'
                }} className={darkMode ? 'fas fa-moon' : 'fas fa-sun'}></i>
              </div>
            </IconButton>
          </NavLink>
        </NavRight>
      </Nav>
    </>
  )
}
