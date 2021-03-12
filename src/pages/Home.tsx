import React, {useState} from 'react';
import { Footer } from '../Layout/Footer';
import Header from '../Layout/Header';
import MainOne from './../Layout/MainOne';

export default function Home() {
  const [darkMode, setdarkMode] = useState<boolean>(false);
  return (
    <>
      <Header />
      <MainOne/>
      <Footer/>
    </>
  )
}
