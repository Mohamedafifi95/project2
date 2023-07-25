import React from 'react'
import ReactDOM from 'react-dom/client'
import '@trussworks/react-uswds/lib/index.css';
import HomePage from './pages/HomePage.tsx'
import UserForm from './components/UserForm.tsx';
import TaxFormPage1 from './components/TaxFormPage1.tsx';
import CenteredComponent from './components/CenteredComponent.tsx';
import NavBar from './components/NavBar.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(

  



  <React.StrictMode>
    <HomePage />    
  </React.StrictMode>,
)
