import React from 'react';
import { Alink, AvatarLink, AvaterImg } from '../assets/Styles/index';
import styled from 'styled-components';
import TwitterIcon from './../images/icons/twitter-new.png';
import GitIcon from './../images/icons/github-new.png'
import { Profile } from '../components/Profile';

export const HeroOne = (props: any) => {
  const { avatar, displayName, bio, twitter, github } = props.data;
  
  return (
    <Wrapper>
      <div className='row'>
        <div className="col-md-3">
          <Profile data={props.data} />
          <P>{bio}</P>
          <IconDiv>
            <A href={`https://twitter.com/${twitter}`}>
              <Img src={TwitterIcon} alt={TwitterIcon}/>
            </A>
            <A href={`https://github.com/${github}`}>
              <Img src={GitIcon} alt={GitIcon}/>
            </A>
          </IconDiv>
        </div>
        <div className='col-md-6'>
          <div dangerouslySetInnerHTML={{__html: props.main}} />
        </div>
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
`
const P = styled.p`
  font-family: "IBM Plex Sans", sans-serif;
  color: rgb(60, 60, 59);
  font-size: 1.0rem;
`;
const IconDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const A = styled.a`
  margin-left: 0px !important;
  margin-right: 10px;
`;
const Img = styled.img`
  max-width: 20px;
  color: rgb(60, 60, 59);
  max-width: 20px;
`;