import React, {useState} from 'react';
import LOGO from '../images/logo/hn-logo.png'
import { NavLeft, NavRight, Nav, NavLink, Icon, IconButton } from '../assets/Styles/index';
import { Button } from '../components/Button';
import { primaryColor } from '../config';
import { Input } from '../components/Input';
export default function Header() {
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  const [darkMode, setDarkMode] = useState<Boolean>(true)
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
            <IconButton>
              <Icon style={{margin: 10}} onClick={handleDarkMode}>
                {darkMode ? <i  className="fas fa-moon"></i> : <i  className="fas fa-sun"></i>}
              </Icon>
            </IconButton>
          </NavLink>
        </NavRight>
      </Nav>
    </>
  )
}
