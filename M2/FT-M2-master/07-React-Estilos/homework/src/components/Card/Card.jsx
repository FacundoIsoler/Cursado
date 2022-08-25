import React from 'react';
import s from './card.module.css';

export default function Card(props) {
  // acá va tu código
  //console.log(props);

  return <div className={s.card}>
    {/* Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        /> */}
  <button onClick ={props.onClose} className= {s.btn}> x </button>
    <h3 className={s.name}>{props.name}</h3>
  <div className={s.content}>
    <h3 className={s.temp}>min <br></br> {props.min} </h3>
    <h3 className={s.temp}>max <br></br> {props.max} </h3>
    <img src= {`http://openweathermap.org/img/wn/${props.img}@2x.png`}/>
  </div>
  
  </div>
  
};
