import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MainFont } from '../config';

export const Card = () => {
  return (
    <div>
      <Article className="card text-left">
        <div>
          <TitleWrapper>
            <Link to='/'>
              <Title className="card-title">Bitcoin's Market Cycle Peak is a Lot Closer Than You Think</Title>
            </Link>
            <Link to='/'>
              <Icon className="fas fa-bookmark"></Icon>
            </Link>
          </TitleWrapper>
          <Img className="card-img-top" src="https://hackernoon.com/images/NgBhuMTisXRHJvE5E2S3MKsexy52-kud036ld.jpeg" alt="" />
          <Tag>
            <ALink href='/'>
              Bitcoin
            </ALink>
          </Tag>
          {/* <p className="card-text">Body</p> */}
        </div>
      </Article>
    </div>
  )
}

const Img = styled.img`
  height: 200px;
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  transition: transform 200ms ease-in-out 0s;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
  }
`;
const Article = styled.article`
  background-color: #000;
  border-radius: 0;
  color: #fff;
`
const CardReact = styled.div`
  display: flex;
  flex-direction: column;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: end;
  justify-content: flex-end;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12.8px;
`;
const TitleWrapper = styled.div`
  display: flex;
`;
const IButton = styled.button`
 opacity: 1 !important;
`
const Icon = styled.i`
  display: block;
  font-weight: 300;
  color: rgb(246, 247, 249);
`;
const Title = styled.h2`
  font-family: ${MainFont};
  padding: 20px;
  /* display: block; */
  /* font-size: 2.25rem; */
  font-weight: 900;
  background-color: transparent;
  color: rgb(193, 202, 212);
`;
const Tag = styled.div`
  position: absolute;
  margin: 0px;
  right: 10px;
  bottom: 10px;
  z-index: 1;
`;
const ALink = styled.a`
font-family: "IBM Plex Mono", monospace;
background: rgb(246, 247, 249) none repeat scroll 0% 0%;
color: rgb(60, 60, 59);
font-weight: bold;
text-decoration: none;
display: flex;
-moz-box-align: center;
align-items: center;
width: auto;
line-height: 1em;
box-shadow: rgb(194, 202, 214) 0px 0.2em, rgb(194, 202, 214) 0px -0.2em, rgb(194, 202, 214) 0.2em 0px, rgb(194, 202, 214) -0.2em 0px;
padding: 10px;
font-size: 1.2rem;
margin: 0px 10px 10px 0px;
text-decoration: none;
&:hover{
  background: rgb(0, 255, 0) none repeat scroll 0% 0%;
    color: rgb(60, 60, 59);
    box-shadow: rgb(0, 187, 0) 0px 0.2em, rgb(0, 187, 0) 0px -0.2em, rgb(0, 187, 0) 0.2em 0px, rgb(0, 187, 0) -0.2em 0px;
    transition: all 120ms ease-in-out 0s;
    text-decoration: none;

  }
}
`