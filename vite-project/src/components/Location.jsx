import React from 'react';

const Location = () => {
  const handleButtonClick = () => {
    window.location.href = "https://maps.app.goo.gl/jPfmGvu7QqSWY6FC6";
  };

  return (
    <div>
      <p>Syangja, PBM-11</p>
      <img src="./location.png" alt="Image" className="loc-img" style={{ marginBottom: '20px', marginLeft: '20px' }} />
      <button onClick={handleButtonClick} style={{ marginLeft: '20px' }}>Setup your destination</button>
    </div>
  );
};

export default Location;
