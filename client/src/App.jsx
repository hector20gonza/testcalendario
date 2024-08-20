import { useEffect,useState } from 'react'
import {
  Routes,
  Route
} from "react-router-dom";

import './App.css'

import Home from './views/Home';

function App() {
 



 

  
  return (
    <div >
      
      <Routes>
       <Route exact  path="/" element={<Home />} />
      
       </Routes>

  </div>
  )
}

export default App