import React from 'react';

export default function SearchBar(props) {
  // <SearchBar
  //         onSearch={(ciudad) => alert(ciudad)}
  // acá va tu código
  const buscar = () => {
    const inputSearch = document.querySelector('#inputSearch');
    props.onSearch(inputSearch.value);
  }
  //console.log(props)
  return <div>
    <input type="text" placeholder='Ciudad...' id= "inputSearch"></input>
    <button onClick = {buscar}>Agregar</button>

    

  </div>
};