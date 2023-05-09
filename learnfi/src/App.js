import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import RoutesAll from './AllRoutes/RoutesAll'
import { BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <div>
    
      <Navbar />
      <RoutesAll />
    
    </div>
  );
}
