import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import example from './exemjopa.json'
import './App.css';
import './App.sass'
import { getList } from './api';
import { ListUnit } from './components/ListUnit';
import { AsteroidsList } from './components/AsteroidsList';
import { Basket } from './components/Basket';
import planet from './Images/planet.png'


function App() {

  return (
    <div className="App">
      <img src={planet} alt='Planet' className='planet'/>
      <AsteroidsList/>
      <Basket/>
    </div>
  );
}

export default App;

// {asteroids.map((x: any) =>
//   <p>{x.name}</p>
// )}

// <ListUnit date={asteroids[0].maxApproachDate}/>
