import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Skill from './Skill';
import Work from './Work';
import Contact from './Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;