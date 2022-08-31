import React from 'react'
import { useParams } from 'react-router-dom'

export default function City({onFilter}) {
    var params = useParams()
    //console.log (params)
    var city = onFilter(params.ciudadId)
    //  console.log(city);

    if (city){
        return (
          <div className="ciudad">
                      <div className="container">
                          <h2>{city.name}</h2>
                          <div className="info">
                              <div>Temperatura: {city.temp} ºC</div>
                              <div>Clima: {city.weather}</div>
                              <div>Viento: {city.wind} km/h</div>
                              <div>Cantidad de nubes: {city.clouds}</div>
                              <div>Latitud: {city.latitud}º</div>
                              <div>Longitud: {city.longitud}º</div>
                          </div>
                  </div>
              </div>
           )
    } else {
        <div>
            <h2>no hay ciudades aún</h2>
        </div>
    }
   
}
