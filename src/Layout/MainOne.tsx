/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react'
import styled from 'styled-components';
import { Data } from './../database';
import Heart from './../images/icons/heart.png';
import Money from './../images/icons/money.png';
import Boat from './../images/icons/boat.png';
import Light from './../images/icons/light.png';
export default function MainOne() {
  const [like, setLike] = useState<number>(0);
  const addLike = (like: number) => {
    let add = like+1
    setLike(add);
  }
  return (
    <Container>
      <Title>{Data.title}</Title>
      <StoryHero className='row'>
        <StoryHeroLeft className='col-md-6'>
          <a href='/'>
            {Data.createdAt}
          </a>
          <Span style={{marginLeft: '10px'}} className="stat">
            <i aria-hidden="true" className="fas fa-star"></i>
            493 reads
          </Span>
          <Icon aria-hidden="true" className="fas fa-bookmark "></Icon>
        </StoryHeroLeft>
        <StoryHeroRight className='col-md-6'>
          <label>{like}</label>
            <div>
              <IconImg onClick={(e: any) => addLike(like)} src={Heart} alt='heart'/>
              <IconImg data-usertype="user" data-emoji="Light" className="emoji not-active" src={Light} data-active="false"/>
              <IconImg data-usertype="user" data-emoji="Boat" className="emoji not-active" src={Boat} data-active="false"/>
              <IconImg data-usertype="user" data-emoji="money" className="emoji not-active" src={Money} data-active="false"/>
            </div>
        </StoryHeroRight>
      </StoryHero>
    </Container>
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
  background: #000 none repeat scroll 0% 0%;
  color: rgb(60, 60, 59);
  padding: 4px 10px;
  margin: 0px 10px;
  margin-left: 10px;
  /* display: flex; */
  text-align: center;
  font-family: "IBM Plex Sans", sans-serif;
  width: 120px;

`;
const IconImg = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  height: 30px;
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
