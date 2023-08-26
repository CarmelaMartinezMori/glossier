import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from './components/Cart/Cart';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar/>    
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
