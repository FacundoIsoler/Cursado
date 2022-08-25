import React from 'react';
import s from './App.module.css';
import Card from '../components/Card/Card.jsx';
import Cards from '../components/Cards/Cards.jsx';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import data, { Cairns } from '../data.js';

function App() {
  return (
    <div className={s.app}>
      <div className={s.header}>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
      <div className={s.main}>
        <Cards
          cities={data}
        />
      </div>
    </div>
  );
}

export default App;
