import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../components/Home';
import Cart from '../Cart';
import Router from '../CustomRouter';
import history from '../../../history';

const App = () => {
  return (
    <Router
      history={history}
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
