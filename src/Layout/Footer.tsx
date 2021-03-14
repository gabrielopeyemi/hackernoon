import React from 'react'
import styled from 'styled-components';
import facebook from './../images/icons/facebook-new.png';
import twitter from './../images/icons/twitter-new.png';
import github from './../images/icons/github-new.png';
import instagram from './../images/icons/instagram-new.png';
import podcast from './../images/icons/podcast-new.png';
import rss from './../images/icons/rss-new.png';
import youtube from './../images/icons/youtube-new.png';
import linkedIn from './../images/icons/linkedin-new.png';

import { Ax, IconDiv, Imgx } from '../assets/Styles';


export const Footer: React.FC<{}> = () => {
  
  const firstFooter = [
    'Help',
    'About',
    'Start Writing',
    'Sponsor:',
    'Brand-as-Author',
    'Sitewide Billboard',
    'Ad by tag',
    'Newsletter',
    'Noonies'
  ];

  const secondFooter = [
    'Contact Us',
    'Terms',
    'Privacy',
    'Cookies',
    'Stories published yesterday',
    'Leaderboard',
    `Contributors' Club`,
    'Chrome Extension',
  ]
  return (
    <Body>
      <div className='row'>
        <div className="col-md-8">
          <div className="row">
            <div className="col-12">
              {firstFooter.map((footer: string, i:number) => (
                <List>              
                  <A href={`https://hackernoon.com/${footer}`}>{footer}</A>
                </List>
              ))}
            </div>
            <div className="col-12">
              {secondFooter.map((footer: string, i:number) => (
                <List>
                  <A href={`https://hackernoon.com/${footer}`}>{footer}</A>
                </List>
              ))}
            </div>
          </div>
      </div>
      <div className="col-md-4">
          <IconDiv>
            <Ax href={`https://linkedin.com/in/${linkedIn}`}>
              <Imgx src={linkedIn} alt={linkedIn}/>
            </Ax>
            <Ax href={`https://facebook.com/${facebook}`}>
              <Imgx src={facebook} alt={facebook}/>
            </Ax>
            <Ax href={`https://twitter.com/${github}`}>
              <Imgx src={twitter} alt={twitter}/>
            </Ax>
            <Ax href={`https://github.com/${github}`}>
              <Imgx src={github} alt={github}/>
            </Ax>
            <Ax href={`https://instagram.com/${github}`}>
              <Imgx src={instagram} alt={instagram}/>
            </Ax>
            <Ax href={`https://instagram.com/${github}`}>
              <Imgx src={podcast} alt={podcast}/>
            </Ax>
            <Ax href={`https://instagram.com/${github}`}>
              <Imgx src={rss} alt={rss}/>
            </Ax>
          </IconDiv>
      </div>
      </div>
    </Body>
  )
}
const List = styled.li`
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
`;
const Body = styled.div`
  margin: 10px
`;
const A = styled.a`
  color: #000;
`;