import './App.css';
import { 
  Route, Routes
} from 'react-router-dom';
import Home from './components/Home.jsx';
import ForgotPassword from './components/ForgetPassword/Forgot.password.jsx';
import ResetPassword from './components/ResetPassword/Reset.password.jsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'https://noteapp-production-00f9.up.railway.app/' || 'http://localhost:3001';

function App() {
  const [logged, setLogged] = useState(null);
  useEffect(() => {
    if(localStorage.getItem('loggedUser')){
      setLogged(localStorage.getItem('loggedUser'));
    }
  },[]);
  return (
    <>
      <Routes>
        <Route exact path='/identify-recover' element={<ForgotPassword logged={logged}/>}/>
        <Route exact path='/reset-password/:id/:tokenResetPassword' element={<ResetPassword logged={logged} />}/>
        <Route exact path='/' element={<Home logged={logged} setLogged={setLogged}/>}/>
      </Routes>
    </>
  );
}

export default App;
