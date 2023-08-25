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
import { DiameterSelection } from './components/DiameterSelection';

function App() {

  let [isDistance, setIsDistance] = useState(true)

  return (
    <div className="App">
      <img src={planet} alt='Planet' className='planet' />
      <div className='content'>
        <DiameterSelection isDistance={isDistance}
          Change={(v: boolean) => setIsDistance(v)} />
        <AsteroidsList isDistance={isDistance}/>
        <Basket />
      </div>
    </div>
  );
}

export default App;

// {asteroids.map((x: any) =>
//   <p>{x.name}</p>
// )}

// <ListUnit date={asteroids[0].maxApproachDate}/>
