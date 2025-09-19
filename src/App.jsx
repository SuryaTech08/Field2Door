import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import AffordableMeals from './Pages/AffordableMeals/AffordableMeals'
import HealthyLiving from './Pages/AffordableMeals/HealthyLiving';
import WeightGain from './Pages/AffordableMeals/WeightGain';
import FatLoss from './Pages/AffordableMeals/FatLoss';

// import YourDietDesign from './Pages/AffordableMeals/YourDietDesign'
// import CustomizableDiet from './Pages/AffordableMeals/CustomizableDiet'
// import WeightLossOrder from './Pages/AffordableMeals/FatLossOrder'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'

import Placeorder from './Pages/PlaceOrder/Placeorder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import AiRecipes from './Components/Airep/Airep'  





const App = () => {
  const[showLogin,setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin ={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Placeorder />} />
        <Route path='/airecipes' element={<AiRecipes />} />
        <Route path='/affordable-meals' element={<AffordableMeals />} />
        <Route path='/affordable-meals/fat-loss' element={<FatLoss />} />
        <Route path='/affordable-meals/healthy-living' element={<HealthyLiving />} />
        <Route path='/affordable-meals/weight-gain' element={<WeightGain />} />
        {/* <Route path='/affordable-meals/your-diet-design' element={<YourDietDesign />} /> */}
  {/* <Route path='/affordable-meals/customizable-diet' element={<CustomizableDiet />} /> */}
  {/* <Route path='/affordable-meals/weight-loss-order' element={<WeightLossOrder />} /> */}
      </Routes>
    </div>
    <Footer />

    </>
    
  )
}

export default App