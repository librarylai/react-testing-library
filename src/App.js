import React, { useState } from 'react'
import './App.scss'
import AccessoryPageContainer from 'containers/accessory/AccessoryPageContainer'
import Navbar from 'components/utils/Navbar'
import { ShopCartDataContext } from 'context/ShopCartDataContext'
function App() {
  const [shopCartData, setShopCartData] = useState([])

  return (
    <div className='App'>
      <ShopCartDataContext.Provider
        value={{
          shopCartData,
          setShopCartData
        }}
      >
        <Navbar />
        <AccessoryPageContainer></AccessoryPageContainer>
      </ShopCartDataContext.Provider>
    </div>
  )
}

export default App
