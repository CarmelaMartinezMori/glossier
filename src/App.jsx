import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  
  return (
    <>
      <NavBar/>
      <ItemListContainer 
      greeting = "Welcome to Glossier" />
    </>
  )
}

export default App
