import React from 'react';
import { Alink, AvatarLink, AvaterImg, Ax, IconDiv, Imgx } from '../assets/Styles/index';
import styled from 'styled-components';
import TwitterIcon from './../images/icons/twitter-new.png';
import GitIcon from './../images/icons/github-new.png'
import { Profile } from '../components/Profile';
import  '../assets/Styles/index.css'
export const HeroOne = (props: any) => {
  const { bio, twitter, github } = props.data;
  
  return (
    <Wrapper>
      <div className='row'>
        <div className="col-md-2">
          <Profile data={props.data} />
          <P>{bio}</P>
          <IconDiv>
            <Ax href={`https://twitter.com/${twitter}`}>
              <Imgx src={TwitterIcon} alt={TwitterIcon}/>
            </Ax>
            <Ax href={`https://github.com/${github}`}>
              <Imgx src={GitIcon} alt={GitIcon}/>
            </Ax> 
          </IconDiv>
        </div>
        <div className='col-md-8'>
          <div dangerouslySetInnerHTML={{__html: props.main}} />
        </div>
        <div className='col-md-2'></div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 20px;
`
const Small = styled.small`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  font-weight: "IBM Plex Mono", monospace;
`;
const P = styled.p`
  font-family: "IBM Plex Sans", sans-serif;
  color: rgb(60, 60, 59);
  font-size: 1.0rem;
`;
