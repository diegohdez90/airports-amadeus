import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../components/Home';
import Header from '../../components/Header';
import Cart from '../Cart';
import Router from '../CustomRouter';
import history from '../../../history';
import Form from '../Form';

const App = () => {
  return (
    <Router
      history={history}
    >
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='cart'
          element={<Cart />}
        />
        <Route 
          path='confirm'
          element={<Form />}
        />
      </Routes>
    </Router>
  )
}

export default App;
