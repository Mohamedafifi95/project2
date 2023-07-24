import React from 'react'
import ReactDOM from 'react-dom/client'
import Newapp from './components/TaxFormPage1.tsx'
// import './css/index.css'
import ProgressBar from './components/ProgressBar.tsx'
import NavBar from './components/NavBar.tsx'
import PaddingComponent from './components/PaddingComponent.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(




  <React.StrictMode>
    <NavBar />
    <PaddingComponent padding={100} />
    <ProgressBar value={25} maxValue={100} />
    <Newapp />
    {/* <App /> */}

  </React.StrictMode>,
)
