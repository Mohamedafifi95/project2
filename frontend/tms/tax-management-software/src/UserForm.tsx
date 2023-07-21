import React, { useState } from 'react';

const UserForm: React.FC = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Do something with the form data, e.g., send it to a server or perform validation
    console.log(formData);
  };

  // CSS style for the form container
  const formContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  // CSS style for the label container
  const labelContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  };

  // CSS style for individual labels
  const labelStyle: React.CSSProperties = {
    minWidth: '100px',
    textAlign: 'right',
    paddingRight: '10px', // Add some space between the label and input
  };

  // CSS style for individual inputs
  const inputStyle: React.CSSProperties = {
    flex: 1, // Allow the input to grow and take up remaining space
  };

  return (
    <form onSubmit={handleSubmit} style={formContainerStyle}>
      {/* Form input fields */}
      <div style={labelContainerStyle}>
        <label style={labelStyle}>First Name:</label>
        <input
          style={inputStyle}
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          placeholder="First Name"
        />
      </div>
      <div style={labelContainerStyle}>
        <label style={labelStyle}>Last Name:</label>
        <input
          style={inputStyle}
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          placeholder="Last Name"
        />
      </div>
      <div style={labelContainerStyle}>
        <label style={labelStyle}>Email:</label>
        <input
          style={inputStyle}
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
        />
      </div>
      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
