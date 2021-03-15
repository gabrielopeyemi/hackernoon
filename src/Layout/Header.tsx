import React, {useEffect, useState} from 'react';
import LOGO from '../images/logo/hn-logo.png'
import { NavLeft, NavRight, Nav, NavLink, IconButton } from '../assets/Styles/index';
import { Button } from '../components/Button';
import { MainFont, primaryColor } from '../config';
import { Input } from '../components/Input';
import MobileIcon from '../images/icons/hn-icon.png'
import styled from 'styled-components';
export interface HeaderArgs {
  darkMode: boolean;
  handleDarkMode: any;
}
export default function Header(props: any) {
  const [mobileView, setMobileView] = useState<any>(true);
  const [navStatus, setNavStatus] = useState<boolean>(false)
  const { darkMode, handleDarkMode, handleNavbar } = props;
  // console.log({navStatus})
  const middleNav: string[] = [
    'Read',
    'Top Stories',
    'Write',
    'Listen',
    'Advertise',
    'About',
    'Tech Companies',
    'Careers',
    'Sloggings'
  ]
  useEffect(() => {
    const showScroll = () => {
      if (window.scrollY >= 100) {
        console.log({ nav: true });
        setNavStatus(true)

      } else {
        console.log({nav: false});
        setNavStatus(false)
      }
      console.log(window.scrollY)
    }
    showScroll();
    window.addEventListener('scroll', showScroll)
  }, []);
  const WebsiteView = () => {
    return(
      <Body>
        <Nav navStatus={navStatus} className='row' style={{backgroundColor: primaryColor}}>
          <NavLeft>
            <ImgW style={{width: '280px'}} src={LOGO} alt='logo'/>
            <ImgM style={{width: '40px'}} src={MobileIcon} alt='logo'/>
          </NavLeft>
          <NavRight>
            <NavLink>
              <Input navStatus={navStatus} />
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
            <NavLink>
              <IconBars onClick={handleNavbar} >
                <div>
                  <i  style={{fontSize: '30px' }} className="fas fa-bars"></i>
                </div>
              </IconBars>
            </NavLink>
          </NavRight>
        </Nav>
        <NavMiddle navStatus={navStatus} className='row'>
          <UL>
            {middleNav.map((nav: string, i:number)=> (
              <Li key={i}>{nav}</Li>
            ))}
          </UL>
        </NavMiddle>
        <NavBottom navStatus={navStatus} className='row'>
          <img style={{width: '20px'}} src={MobileIcon} alt='logo'/> {props.title}
          @codebucks
        </NavBottom>
      </Body>
    )
  }
 
  return (
    <>
      <WebsiteView />
    </>
  )
}
export interface TypeArgs{
  Outline?: boolean;
  navStatus?: boolean;
}

export interface NavStatus{
  navStatus: any;
}
const NavBottom = styled.div<NavStatus>`
  padding: 20px 30px 20px 30px;
  background-color: ${primaryColor};
  font-family: ${MainFont};
  font-weight: 800;
  color: black;
  display: ${(p: any)=> p.navStatus ?  'block' : 'none'}
`;
const NavMiddle = styled.div<TypeArgs>`  
display: ${(p: any) => p.navStatus ? 'none' : 'flex'};
  color: white;
  @media (max-width: 875px) {
    display: none
  }
`;
const Body = styled.div`
  position: fixed;
  width: 100%;
  z-index: 9999
`;
const ImgW = styled.img`
    @media (max-width: 875px) {
        display: none
      }
`;
const ImgM = styled.img`
@media (min-width: 875px) {
    display: none;
  }
`;
const IconBars = styled.button`
  font-size: 2.4rem;
  color: rgb(0, 59, 0);
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0);
  border: 0px none;
  overflow: hidden;
  cursor: pointer;
  padding-right: 10px;
  @media (min-width: 875px) {
    display: none;
  }
`;
const Li = styled.li`
  display: inline-flex;
  margin-left: 10px;
  margin-right: 10px;
`;
const UL = styled.ul`
  display: ${(p : any) => p.navStatus ? 'none' : 'flex'};
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 10px;
  background-color: #003b00;
`;