import React, { CSSProperties, useState } from 'react';
import UserForm from '../UserForm';

const centeredComponentStyle: CSSProperties = {
  textAlign: 'center',
  minWidth: '500px', // Set the minimum width to 200 pixels
  minHeight: '500px', // Set the minimum height to 100 pixels
  border: '1px solid #ccc',
};



const CenteredComponent: React.FC = () => {
  return (
    <div style={centeredComponentStyle}>
      <div>
        <h2>IRS Tax Input Form</h2>
        <p>Please fill in the fields below.</p>
      </div>
      <div>
      <UserForm />
        
      </div>
    </div>
  );
};

export default CenteredComponent;
