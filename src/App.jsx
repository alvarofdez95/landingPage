import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Founders from './components/Founders';
import Offer from './components/Offer';
import FinalCTA from './components/FinalCTA';
import { Toaster } from './components/ui/toaster';

const App = () => {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Founders />
      <Offer />
      <FinalCTA />
      <Toaster />
    </>
  );
};

export default App;
