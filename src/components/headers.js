import React from 'react';

const HeaderComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25vh',
      }}
    >
      <h2>20k views on YouTube, 2 years of experience</h2>
      <h1>ACTIVE BUNDLE OFFERS</h1>
      <h2>BUY 2 GET 1 FREE (add 3 beats to the cart)</h2>
    </div>
  );
};

export default HeaderComponent;