import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Appdow from '../../Components/Appdown/Appdow'

const Home = () => {
    const [category, setCategory] = useState('All');
  return (
    <div>
        <Header />
        <ExploreMenu  category={category} setCategory={setCategory} />
        <FoodDisplay  category={category} />
        <Appdow />     

    </div>
  )
}

export default Home