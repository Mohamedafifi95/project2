import React from 'react';

interface ProgressBarProps {
  value: number;
  maxValue: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, maxValue }) => {
  const progress = (value / maxValue) * 100;

  return (
    <div style={{ width: '100%', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
      <div
        style={{
          width: `${progress}%`,
          height: '20px',
          backgroundColor: '#007BFF',
          borderRadius: '5px',
          transition: 'width 0.3s ease-in-out',
        }}
      />
    </div>
  );
};

export default ProgressBar;
