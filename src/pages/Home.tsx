/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import styled from 'styled-components';
import { Footer } from '../Layout/Footer';
import Header from '../Layout/Header';
import MainOne from './../Layout/MainOne';
import { Data } from './../database';
import Title from '../Layout/Title';
import { MainImg } from '../Layout/MainImg';
import { HeroOne } from '../Layout/HeroOne';
import HeroTwo from '../Layout/HeroTwo';
import { HeroThree } from '../Layout/HeroThree';
import { Related } from '../Layout/Related';
import { Tags } from '../Layout/Tags';
import { Bottom } from '../Layout/Bottom';

export default function Home() {
  const [darkMode, setDarkmode] = useState<boolean>(true);
  const handleDarkMode = () => {
    setDarkmode(!darkMode);
  };

  return (
    <>
      <Header style={{margin: 0}} darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <div style={{backgroundColor: darkMode ? '#000' : '#fff', margin: 0, color: darkMode ? '#fff' : '#000'}}>
        <div className='container'>
          <Title data={Data.title}/>
          <MainOne data={Data} />
          <MainImg data={Data.mainImage} />
          <HeroOne data={Data.profile} main={Data.markup} />
          <HeroTwo />
          <HeroThree link={Data.profile.adLink} data={Data.profile} />
          <Related data={Data.relatedStories} />
          <Tags data={Data.tags} />
          <Bottom />
        </div>
      </div>
      <Footer/>
    </>
  )
}