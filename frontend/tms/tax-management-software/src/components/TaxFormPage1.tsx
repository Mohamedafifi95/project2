import React from 'react';
import CenteredComponent from './CenteredComponent';
import '../css/App.css';

const Newapp: React.FC = () => {
  return (
    <div className="app">
      <div className="content">
        <div className="side-div">Left Side</div>
        <CenteredComponent />
        <div className="side-div">Right Side</div>
      </div>
    </div>
  );
};

export default Newapp;
