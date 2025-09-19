import React from 'react'
import './Appdow.css'
import { assets } from '../../assets/assets'

const Appdow = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>Get the best food delivery experience by downloading  app<br /> Feild2door</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>
      
    </div>
  )
}

export default Appdow