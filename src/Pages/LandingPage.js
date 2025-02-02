// LandingPage for website
// Contains image and welcome message

import React from 'react';
import '../styles.css';

export default function LandingPage() {

  return (
    <div>
      <img src="/Photos/Ashton1.jpg" alt='AshtonBench' className="backImage" />

      <h1 className = 'welcome'>
          Welcome to my website!
      </h1>
    </div>
  );
}