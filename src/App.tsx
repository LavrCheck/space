import React, { useEffect, useState } from 'react'
import './App.css'
import './App.sass'
import { AsteroidsList } from './components/AsteroidsList'
import { Basket } from './components/basket/Basket'
import { BasketContents } from './components/basket/BasketContents'
import planet from './Images/planet.png'
import { DiameterSelection } from './components/DiameterSelection'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Info } from './components/Info'
import { asteroids } from './components/AsteroidsList'
import { Button } from './components/ui/Button'



function App() {

  const [isDistance, setIsDistance] = useState<boolean>(true)
  const [isOrderSend, setIsOrderSend] = useState<boolean>(false)
  const [isDiameterHidden, setIsDiameterHidden] = useState<boolean>(true)

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
    <BrowserRouter basename="/space">
      <Routes>
        <Route path='/*' element={
          <div className="App">
            <img src={planet} alt='Planet' className='planet' />
            <div className='content'>

              <Routes>
                <Route path='/' element={<>
                  <Basket selectedAsteroids={selectedAsteroids} />
                  <DiameterSelection isDistance={isDistance}
                    Change={(v: boolean) => setIsDistance(v)} 
                    isDiameterHidden={isDiameterHidden}/>
                  <AsteroidsList isDistance={isDistance}
                    selected={(x: asteroids) => {
                      let newVal = [...selectedAsteroids, x]; setSelectedAsteroids(newVal)
                      setIsOrderSend(false)
                    }}
                    selectedAsteroids={selectedAsteroids}
                    isAsteroids={(x) => setIsDiameterHidden(x)}
                  /> </>} />

                <Route path='/basket' element={<>
                  <Button isBackButton={true} />
                  {!isOrderSend ? (
                    <>
                      {selectedAsteroids.length !== 0 ? (
                        <>
                          <DiameterSelection isDistance={isDistance}
                            Change={(v: boolean) => setIsDistance(v)}
                            name='Подлеты астероидов в корзине' />
                          <BasketContents selectedAsteroids={selectedAsteroids}
                            remove={(name: string) => {
                              setSelectedAsteroids
                                ([...selectedAsteroids.filter((x: { name: string }) => x.name !== name)])
                            }}
                            isDistance={isDistance}
                            sendOrder={() => { setSelectedAsteroids([]); setIsOrderSend(true) }} />
                        </>
                      ) : (
                        <div className='variantBasket'>
                          <p>Корзина пуста</p>
                          <p>Земля в опасности!</p>
                        </div>)}
                    </>)
                    : (<div className='variantBasket'><p>Заказ отправлен!</p></div>)} </>} />

                <Route path='/info/:id' element={<Info />} />
              </Routes>
            </div>
          </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;