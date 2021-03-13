/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Like } from './Like';
export default function MainOne(props: any) {
  // const addLike = () => {
  //   // let add = like+1
  //   // setLike(add);
  //   // console.log(likeType)
  // }

  return (
      <StoryHero className='row'>
        <StoryHeroLeft className='col-md-6'>
          <a href='/'>
            {props.data.createdAt}c
          </a>
          <Span style={{marginLeft: '10px'}}>
            <i aria-hidden="true" className="fas fa-star"></i>
            493 
          </Span>
          <Icon aria-hidden="true" className="fas fa-bookmark "></Icon>
        </StoryHeroLeft>
        <StoryHeroRight className='col-md-6'>
          <Like />
        </StoryHeroRight>
      </StoryHero>
  )
}

const StoryHero = styled.div`
`;
const StoryHeroLeft = styled.div`

`;

const StoryHeroRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Span = styled.span`
  background: rgb(246, 247, 249) none repeat scroll 0% 0%;
  color: rgb(60, 60, 59);
  padding: 4px 10px;
  margin: 0px 10px;
  margin-left: 10px;
  /* display: flex; */
  text-align: center;
  font-family: "IBM Plex Sans", sans-serif;
  width: 120px;

`;
export interface heartLightArgs {
  Light: boolean;
}
const Moves = keyframes`
  0% {
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0;
    }
  35% {
      transform: translate(-50%, -30px) scale(1.5);
      opacity: 1;
  }
  100% {
      transform: translate(-50%, -45px) scale(2.75);
      opacity: 0;
  }0% {
    transform: translate(-50%, -50%) scale(0.2);
    opacity: 0;
  }
  35% {
      transform: translate(-50%, -30px) scale(1.5);
      opacity: 1;
  }
  100% {
      transform: translate(-50%, -45px) scale(2.75);
      opacity: 0;
  }

  0% {
    transform: translate(-50%, -50%) scale(0.2);
    opacity: 0;
  }
  35% {
      transform: translate(-50%, -30px) scale(1.5);
      opacity: 1;
  }
  100% {
      transform: translate(-50%, -45px) scale(2.75);
      opacity: 0;
  }
`;
const Icon = styled.i`
  display: block;
  font-weight: 300;
  color: rgb(60, 60, 59);
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
`;

const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 3.5rem auto;
`;
const Title = styled.h1`
    margin-bottom: 0px;
    margin-top: 0px;
    grid-column: 1 / -1;
    text-align: center;
    font-size: 2.5em;
    letter-spacing: 0px;
    font-family: "IBM Plex Mono", monospace;
    line-height: 1.4;
    margin: 0.67em 0px;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    font-weight: 800;
`;
const StoryMeta = styled.div`
  font-family: "IBM Plex Sans", sans-serif;
  line-height: 1.666;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StoryMetaRight = styled.div`

`;
const StoryDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
