import React, { useState } from 'react'
import './AppLoginLock.css'
import './AppDim.css'



import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import { Cart } from './pages/Cart/Cart'
import { PlaceOrder } from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import Search from './pages/Search/Search'
import FoodDetails from './pages/FoodDetails/FoodDetails'


const App = () => {

  const [showLogin, setShowLogin] = useState(false)

 

  return (
    <>
      {showLogin ? (
        <div className="app-login-lock">
          <LoginPopup setShowLogin={setShowLogin} />
        </div>
      ) : null}
      <div className={showLogin ? 'app-dim no-scroll' : ''}>

        <div className='app'>
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path='/' element={<Home />} />
<Route path='/cart' element={<Cart />} />
            <Route path='/search' element={<Search />} />
            <Route path='/food/:id' element={<FoodDetails />} />
            <Route path='/order' element={<PlaceOrder />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/MyOrders' element={<MyOrders />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App