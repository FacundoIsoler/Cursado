import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import City from '../components/City';
import {Route} from 'react-router-dom';

const apiKey = '5e9b6d70ef89e244f2ae83d1b84495c2';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return 'Ciudad no encontrada';
    }
  }
  return (
    <div className="App">
      <Route path= '/' render={() =>  <Nav onSearch={onSearch}/>}/>
      <Route exact path='/' render={() => <Cards cities={cities} onClose={onClose}/>}/> 
      <Route exact path= '/about' component={About}/>
      <Route exact path= '/city/:ciudadId'> <City onFilter={onFilter}/></Route>

      <hr /> 
    </div>
  );
}

export default App;
