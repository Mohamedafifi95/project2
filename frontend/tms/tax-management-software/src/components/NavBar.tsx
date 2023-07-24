import React from 'react';
import '../css/NavBar.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Header, PrimaryNav, Title, Grid } from '@trussworks/react-uswds';
import Page1 from '../pages/Page1'


const NavBar: React.FC = () => {


  const navItems = [
    <Link to='/Page1'>Page 1</Link>,
    <Link to='/Page2'>Page 2</Link>,   
    <Link to='/Page3'>Page 3</Link>
  ];


  return (
    <div className="nav-bar">
      {/* Add logo and navigation links here */}
      Logo<br></br>
      Nav Bar


      <BrowserRouter basename='/'>
          <Grid row>
            <PrimaryNav items={navItems}></PrimaryNav>
          </Grid>
          <Routes>
            <Route path='/Page1' element={<Page1 />} />
          </Routes>

        </BrowserRouter>



    </div>
    
  );
};

export default NavBar;
