import React, { useEffect, useState } from 'react';
import './App.css';
import './App.sass'
import { getList } from './api';
import { AsteroidsList } from './components/AsteroidsList';
import { Basket } from './components/basket/Basket';
import { BasketContents } from './components/basket/BasketContents';
import planet from './Images/planet.png'
import { DiameterSelection } from './components/DiameterSelection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  let [isDistance, setIsDistance] = useState<boolean>(true)
  let [isOrderSend, setIsOrderSend] = useState<boolean>(false)

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
            <div className='content'>
            <Basket selectedAsteroids={selectedAsteroids} />
              <DiameterSelection isDistance={isDistance}
                Change={(v: boolean) => setIsDistance(v)} />
              <AsteroidsList isDistance={isDistance}
                selected={(x: any) => {
                   let newVal = [...selectedAsteroids, x]; setSelectedAsteroids(newVal) 
                  setIsOrderSend(false)}}
                selectedAsteroids = {selectedAsteroids}
              />
            </div>
          </div>} />

        <Route path='/basket' element={
          <div className='App'>
            <img src={planet} alt='Planet' className='planet' />
            <div className='content'>
              { !isOrderSend ? (
                <>
              { selectedAsteroids.length !==0 ? (
                <>
              <DiameterSelection isDistance={isDistance}
                Change={(v: boolean) => setIsDistance(v)} />
                <BasketContents selectedAsteroids={selectedAsteroids}
                remove={(name: string) => { setSelectedAsteroids
                  ([...selectedAsteroids.filter((x: { name: string }) => x.name !== name)]) }}
                isDistance={isDistance} 
                sendOrder={()=> {setSelectedAsteroids([]);setIsOrderSend(true)}}/>
                </>
                ) : (
                  <div className='variantBasket'>
                  <p>Корзина пуста</p>
                  <p>Земля в опасности!</p>
                  </div>
                )
              } 
                 </>) 
              : (<div className='variantBasket'><p>Заказ отправлен!</p></div>)
        }
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
