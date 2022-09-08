import React from 'react'
import ApiProducts from './ApiProducts'
import LocalProduct from './LocalProduct'

function Home({name, location}) {
  return (
    <div>
      <h2>Este es el nuevo {name} </h2>
      <h4> Made with love in {location} </h4>
      
      <LocalProduct/>
      <ApiProducts/>
 
    </div>
  )
}

export default Home