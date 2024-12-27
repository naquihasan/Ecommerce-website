import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menuBorder , setMenuBorder] = useState('shop');

  return (
    <div className='navbar'>
          <div className='nav-logo'>
              <img src={logo} alt="" />
              <p>SHOPPER</p>
          </div>
          <ul className='nav-menu'>
              <li  className={menuBorder === 'shop' ? 'active' : ''} onClick={() => setMenuBorder('shop')}>
                <Link to='/'>Shop</Link>
              </li>
              <li className={menuBorder === 'men' ? 'active' : ''} onClick={() => setMenuBorder('men')}>
                <Link to='/mens'>Men</Link>
              </li>
              <li className={menuBorder === 'women' ? 'active' : ''} onClick={() => setMenuBorder('women')}>
              <Link to='/womens'>women</Link>
              </li>
              <li className={menuBorder === 'kid' ? 'active' : ''} onClick={() => setMenuBorder('kid')}>
              <Link to='/kids'>Kids</Link>
              </li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/ cart'><img src={cart} alt="" /></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar