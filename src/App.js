import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import {BrowserRouter} from 'react-router-dom';
import Mainroute from './router/route';
function App() {
  return (
    <BrowserRouter>
    <Mainroute/>
    </BrowserRouter>
  );
}

export default App;
