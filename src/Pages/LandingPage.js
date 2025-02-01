
// LandingPage for website
// Contains image and welcome message

import React from 'react';
document.body.style = 'background:rgb(0, 0, 0);';

export function LandingPage() {
  return (
    <div>
        <img src="/Photos/Ashton1.jpg" alt='AshtonBench' 
        style={{position: "absolute", 
        height: "100%", 
        width: "100%", 
        objectFit: "cover", 
        top: 0,
        left: 0}}/>
        <h1 style={{
            color: 'white', 
            position: "absolute", 
            fontSize: '50px', 
            fontFamily: 'Arial', 
            top: "50%", 
            transform: "transformY(-50%)",
            left: "50px"
            }}>
                Welcome to my website!</h1>
    </div>
  );
}