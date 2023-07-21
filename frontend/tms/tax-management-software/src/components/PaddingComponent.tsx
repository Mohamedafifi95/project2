import React from 'react';

interface PaddingComponentProps {
  padding: number;
}

const PaddingComponent: React.FC<PaddingComponentProps> = ({ padding }) => {
  return (
    <>
      <div style={{ padding }}></div>
    </>
  );
};

export default PaddingComponent;
