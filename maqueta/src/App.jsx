import { useState } from 'react';
import './App.css';
import estilos from './css/estilos.css';
import React from 'react';
import Menu from './components/Menu';
import Slider from './components/Slider';
import Pilares from './components/Pilares';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div>
        <Menu />
      </div>
      <div>
        <Slider />
        <Pilares />
        <Footer />
      </div>      
    </>
  )
}

export default App
