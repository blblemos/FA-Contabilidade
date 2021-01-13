import React from 'react';
import Services from '../Components/Services/Services';
import Slide from '../Components/Slide/slide';
import About from '../Components/About/about';

const Home = () => {
  return (
    <div className="this-page">
      <Slide/>
      <About/>
      <Services/>
    </div>
  );
};

export default Home;
