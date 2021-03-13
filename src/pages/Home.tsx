import React, {useState} from 'react';
import styled from 'styled-components';
import { Footer } from '../Layout/Footer';
import Header from '../Layout/Header';
import MainOne from './../Layout/MainOne';
import { Data } from './../database';
import Title from '../Layout/Title';
import { MainImg } from '../Layout/MainImg';
import { HeroOne } from '../Layout/HeroOne';
import { Card } from 'reactstrap';
import HeroTwo from '../Layout/HeroTwo';
import { HeroThree } from '../Layout/HeroThree';
export default function Home() {
  const [darkMode, setdarkMode] = useState<boolean>(false);
  return (
    <>
      <Header />
      <div className='container'>
        <Title data={Data.title}/>
        <MainOne data={Data} />
        <MainImg data={Data.mainImage} />
        <HeroOne data={Data.profile} main={Data.markup} />
        <HeroTwo />
        <HeroThree data={Data.profile}/>
      </div>
      <Footer/>
    </>
  )
}