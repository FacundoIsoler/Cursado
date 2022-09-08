import React, { useState } from 'react';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import './App.css';


export default function App() {

  const [cities, setCities] = React.useState([]);

  const apiKey = 

  function onSearch(ciudad){
   // setCities(oldCities => [...oldCities, ciudadEjemplo]);
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards/>
    </div>
  );
}
