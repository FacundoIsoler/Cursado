import React from 'react';
import s from './SearchBar.module.css'


export default function SearchBar(props) {
  // <SearchBar
  //         onSearch={(ciudad) => alert(ciudad)}
  // acá va tu código
  const buscar = () => {
    const inputSearch = document.querySelector('#inputSearch');
    props.onSearch(inputSearch.value);
  }
  //console.log(props)
  return <div className={s.search}>
    <input type="text" placeholder='Ciudad...' id= "inputSearch" className={s.input}></input>
    <button onClick = {buscar} className={s.btn}>Agregar</button>
  </div>
};