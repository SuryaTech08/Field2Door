import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/Storecontext'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu");
  const {getTotalCartAmount} = useContext(StoreContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    setMobileMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link>
      <ul className={`navbar-menu${mobileMenuOpen ? ' mobile-active' : ''}`}>
        <Link to='/' onClick={() => handleMenuClick("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <Link to='/affordable-meals' onClick={() => handleMenuClick("Affordable Meals")} className={menu === "Affordable Meals" ? "active" : ""}>Affordable Meals</Link>
        <a href='#explore-menu' onClick={() => handleMenuClick("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
       
        <a href='#footer' onClick={() => handleMenuClick("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
        <Link to='/airecipes' onClick={() => handleMenuClick("AiRecipes")} className={menu === "AiRecipes" ? "active" : ""}>AiRecipes</Link>
      </ul>
      <div className="navbar-right">
       
        <div className="navbar-search-icon">
          <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()=== 0 ?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)} className="navbar-button">
          sign in
        </button>
      </div>
      <div className={`navbar-hamburger${mobileMenuOpen ? ' open' : ''}`} onClick={handleHamburgerClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar