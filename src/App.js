import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ShopCartDataContext } from 'context/ShopCartDataContext'
import AccessoryPageContainer from 'containers/accessory/AccessoryPageContainer'
import LoginPage from 'containers/login/LoginPage'
import Navbar from 'components/utils/Navbar'
import React, { useState } from 'react'

import './App.scss'

function App() {
  const [shopCartData, setShopCartData] = useState([])

  return (
    <div className='App'>
      <Router>
        <ShopCartDataContext.Provider
          value={{
            shopCartData,
            setShopCartData,
          }}
        >
          <Navbar />
          <Switch>
            <Route path='/Login'>
              <LoginPage />
            </Route>
            <Route path='/Shop'>
              <AccessoryPageContainer />
            </Route>
          </Switch>
        </ShopCartDataContext.Provider>
      </Router>
    </div>
  )
}

export default App
