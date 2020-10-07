import React from 'react';
import '../App.css';
import Cards from '../components/Cards/Cards';
import MainSection from '../components/MainSection/Main-Section';
import Footer from '../components/Footer/Footer';

function HomePage() {
  return (
    <>
      <MainSection />
      <Cards /> 
      <Footer /> 
    </>
  );
};

export default HomePage;