import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { PrimaryNav, Grid } from '@trussworks/react-uswds';
import Page1 from '../pages/Page1';
import logoImg from "../assets/logoImg.jpg";
import PaddingComponent from '../components/PaddingComponent';
import Page2 from './Page2';
import SignInPage from './SignInPage';
import NameForm from '../components/NameForm';
import W2Form from '../components/W2Form';

const HomePage: React.FC = () => {
  const navItem1 = [<Link to='/Page1'>Register</Link>];
  const navItem2 = [<Link to='/SignIn'>Sign In</Link>];
  const navItem3 = [<Link to='/FileTaxes'>File Taxes</Link>];

  return (
    <BrowserRouter basename='/'>
      <div> 
        <div className="bg-primary-lighter">
          {/* Add logo and navigation links here */}
          <img src={logoImg} alt="Logo" style={{ display: "block", margin: "0 auto" }} />
          <PaddingComponent padding={20} />


          <Grid row>
            <Grid col={2}><PrimaryNav items={navItem1} ></PrimaryNav></Grid>
            <Grid col={2}><PrimaryNav items={navItem2}></PrimaryNav></Grid>
            <Grid col={2}><PrimaryNav items={navItem3}></PrimaryNav></Grid>
          </Grid>

        </div>

        <div>
          <Grid row className="flex-justify-center">
            <Grid col={4}>
              <Page2 />
            </Grid>
            <Grid col={4}>
              <Routes>
                <Route path='/Page1' element={<Page1 />} />
                <Route path='/FileTaxes' element={<NameForm />} />
                <Route path='/SignIn' element={<SignInPage />} />
                <Route path='/W2Form' element={<W2Form />} />
              </Routes>
            </Grid>
            <Grid col={4}>
              <Page2 />
            </Grid>
          </Grid>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default HomePage;
