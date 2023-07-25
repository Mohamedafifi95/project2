import React from 'react';
// import '../css/NavBar.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { PrimaryNav, Grid, GridContainer } from '@trussworks/react-uswds';
import Page1 from '../pages/Page1'
import logoImg from "./logoImg.jpg"; // Import the image using a relative path
import PaddingComponent from '../components/PaddingComponent';
import Page2 from './Page2';



const HomePage: React.FC = () => {


  const navItem1 = [<Link to='/Page1'>Register</Link>];
  const navItem2 = [<Link to='/Page2'>Sign In</Link>];
  const navItem3 = [<Link to='/Page3'>File Taxes</Link>];




  return (
    <div className="bg-primary-lighter">
      {/* Add logo and navigation links here */}
      <img src={logoImg} alt="Logo" style={{ display: "block", margin: "0 auto" }} />
      <PaddingComponent padding={20} />

      <BrowserRouter basename='/'>
        <GridContainer>
          <Grid row>
            <Grid col={1}><PrimaryNav items={navItem1}></PrimaryNav></Grid>
            <Grid col={5}><PrimaryNav items={navItem2}></PrimaryNav></Grid>
            <Grid col={5}><PrimaryNav items={navItem3}></PrimaryNav></Grid>
          </Grid>
        
          <Grid row>
            <Grid col={4}>
              <Page2 />
            </Grid>
            <Grid col={4}>
              <Routes>
                <Route path='/Page1' element={<Page1 />} />
              </Routes>
            </Grid>
            <Grid col={4}>
              <Page2 />
            </Grid>
          </Grid>
        </GridContainer>

      </BrowserRouter>

    </div>

  );
};

export default HomePage;
