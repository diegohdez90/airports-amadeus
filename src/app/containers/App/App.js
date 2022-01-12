import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Home from '../../components/Home'
import Cart from '../Cart';
import history from '../../../history';

const App = () => {
  return (
    <Router
      navigator={history}
      location={history.location}
    >
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='cart'
          element={<Cart />}
        />
      </Routes>
    </Router>
  )
}

export default App;
