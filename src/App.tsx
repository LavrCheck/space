import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import example from './exemjopa.json'
import './App.css';
import './App.sass'
import { getList } from './api';
import { ListUnit } from './components/ListUnit';
import { AsteroidsList } from './components/AsteroidsList';
import { Basket } from './components/basket/Basket';
import { BasketContents } from './components/basket/BasketContents';
import planet from './Images/planet.png'
import { DiameterSelection } from './components/DiameterSelection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  let [isDistance, setIsDistance] = useState<boolean>(true)

  const [selectedAsteroids, setSelectedAsteroids] = useState(
    () => {
      const saved = localStorage.getItem('selectedAsteroids')
      return saved ? JSON.parse(saved) : []
    }
  )
  useEffect(() => {
    localStorage.setItem('selectedAsteroids', JSON.stringify(selectedAsteroids))
  }, [selectedAsteroids])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div className="App">
            <img src={planet} alt='Planet' className='planet' />
            <Basket selectedAsteroids={selectedAsteroids} />
            <div className='content'>
              <DiameterSelection isDistance={isDistance}
                Change={(v: boolean) => setIsDistance(v)} />
              <AsteroidsList isDistance={isDistance}
                selected={(x: any) => {
                  if (!selectedAsteroids.some((a: { name: any; }) => a.name === x.name)) { let newVal = [...selectedAsteroids, x]; setSelectedAsteroids(newVal) }
                }}
                selectedAsteroids = {selectedAsteroids}
              />
            </div>
          </div>} />

        <Route path='/basket' element={
          <div className='App'>
            <img src={planet} alt='Planet' className='planet' />
            <div className='content'>
              <DiameterSelection isDistance={isDistance}
                Change={(v: boolean) => setIsDistance(v)} />
              <BasketContents selectedAsteroids={selectedAsteroids}
                remove={(name: any) => { setSelectedAsteroids([...selectedAsteroids.filter((x: { name: any }) => x.name !== name)]) }}
                isDistance={isDistance} />
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// {asteroids.map((x: any) =>
//   <p>{x.name}</p>
// )}

// <ListUnit date={asteroids[0].maxApproachDate}/>
