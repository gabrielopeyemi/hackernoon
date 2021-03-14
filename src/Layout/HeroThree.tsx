import React from 'react'
import styled from 'styled-components';
import { Profile } from '../components/Profile';
import { primaryColor } from '../config';

export const HeroThree = (props: any) => {
  return (
    <Body >
      <div className='row'>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Footer>
            <div className="row">
              <div className="col-md-6">
                <Profile data={props.data} color={primaryColor}/>
              </div>
              <div className="col-md-6">
                <A className="ad" href={props.link} rel="ugc">
                  <i className="fas fa-user-astronaut" aria-hidden="true"></i>
                  Subscribe to Learn ReactJS by building!
                </A>
              </div>
            </div>
          </Footer> 
        </div>
        <div className="col-md-2"></div>
      </div>
    </Body>
  )
}

const Footer = styled.div`
margin: 0px auto;
background: rgb(33, 36, 40) none repeat scroll 0% 0%;
border-style: solid;
border-width: 16px;
border-image: url("https://hackernoon.com/Devimg/hn-ad-green.png") 16 / 1 / 8px stretch;
color: ${primaryColor};
font-weight: bold;
text-decoration: none;
position: relative;
line-height: 1.3;
display: grid;
gap: 15px;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-template-rows: 1fr;
-moz-box-align: center;
align-items: center;
`;
const Body = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const A = styled.a`
  color: ${primaryColor};
  text-decoration: none;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  font-size: 1.2rem;
  &:hover{
    color: ${primaryColor};
    text-decoration: none;
  }
`