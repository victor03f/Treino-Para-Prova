import React from 'react';
import '../src/css/styles.css';
import './App.css';
import Galeria from './componentes/Galeria';
import Lista from './componentes/Lista';
import NavBar from './componentes/NavBar';

function App() {
  return (

    <div className="App">
      <NavBar/>
      <Lista/>
      <Galeria/>

 
    </div>
  )
}

export default App;
