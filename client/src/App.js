import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage'
import Login from './pages/login';
import SignUp from './pages/signup';

function App() {
  return (
  <Router>
    <Routes>

      <Route path='/'
      element={<Home/>}
      />
      
      <Route path='/login'
      element={<Login/>}
      />

      <Route path='/signup'
      element={<SignUp/>}
      />
      
    </Routes>

  </Router>
  );
    
}

export default App;
