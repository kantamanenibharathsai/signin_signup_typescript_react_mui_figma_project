import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/sign_in/sign-in"
import './App.css';
import SignUp from './components/sign_up/sing-up';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SignIn />}/>
    <Route path="/signup" element={<SignUp />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
