import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import Calculator from './components/calculator';
function App() {

  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
      {/* <Calculator/> */}
    </>
  );
}


export default App
