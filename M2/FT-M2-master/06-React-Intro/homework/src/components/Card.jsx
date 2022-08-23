import React from 'react';

export default function Card(props) {
  // acá va tu código
  //console.log(props);

  return <div>
    {/* Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        /> */}
  <button onClick ={props.onClose}> x </button>
  <img src= {`http://openweathermap.org/img/wn/${props.img}@2x.png`}/>
  <h3>{props.name}</h3>
  <h3>Temperatura min <br></br> {props.min} </h3>
  <h3>Temperatura max <br></br> {props.max} </h3>
  
  </div>
  
};
