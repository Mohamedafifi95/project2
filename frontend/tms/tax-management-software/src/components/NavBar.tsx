import React from 'react';
import '../css/NavBar.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Header, PrimaryNav, Title, Grid, SideNav } from '@trussworks/react-uswds';
import Page1 from '../pages/Page1'


const NavBar: React.FC = () => {


  const navItems = [
    <Link to='/Page1'>Register</Link>,
    <Link to='/Page2'>Sign In</Link>,
    <Link to='/Page3'>File Taxes</Link>
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

      {/* <BrowserRouter basename='/'>
       
            <PrimaryNav items={navItems}></PrimaryNav>
            <SideNav items={navItems} />


          <Routes>
            <Route path='/Page1' element={<Page1 />} />
          </Routes>

        </BrowserRouter> */}



    </div>

  );
};

export default NavBar;
