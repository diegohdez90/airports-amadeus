import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../../components/Home'
import Cart from '../Cart/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
