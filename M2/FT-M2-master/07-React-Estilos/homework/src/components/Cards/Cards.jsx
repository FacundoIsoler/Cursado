import React from 'react';
import cities from '../../data';
import Card from '../Card/Card';


export default function Cards(props) {
  // acá va tu código
  //console.log(props);
  // tip, podés usar un map
  return <div>
    {props.cities.map((ciudades)=><Card
    name = {ciudades.name}
    min = {ciudades.main.temp_min}
    max = {ciudades.main.temp_max}
    img = {ciudades.weather[0].icon}
    onClose={() => alert(ciudades.name)}
    key = {ciudades.id}
        />)}
  </div>
};