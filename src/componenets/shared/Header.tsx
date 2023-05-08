import {  Link } from "react-router-dom";
import logo from '/src/assets/shared/desktop/logo.svg'
import iconCart from '/src/assets/shared/desktop/icon-cart.svg'
import iconHamburger from '/src/assets/shared/tablet/icon-hamburger.svg'
import CartModal from '../modals/CartModal'
import { useState } from "react";
import { useContext } from 'react'
import {ProductContext} from '../../ProductContext'
import Menu from "./Menu";


export default function Header() {

  const {state, dispatch} = useContext(ProductContext)

  const [isMenuVisible, setIsMenuVisible] = useState(false)
  console.log(isMenuVisible)

  function handleOnClick() {
    dispatch({type:'CART_MODAL', payload: true})
  }

    return  (
       <>
          <header className="flex justify-between bg-black px-8 py-10 border-b border-gray">

            {/* hamburger on small screen */}
            <button className="lg:hidden" onClick={()=>setIsMenuVisible(prevState => !prevState)}
            >
              <img src={iconHamburger} alt="" />
            </button>

            {/* audiophile logo */}
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>

            {/* nav on tablet and desktop */}
            <nav className="text-white hidden lg:block">
              <ul className="flex">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/headphones">Headphones</Link>
                </li>
                <li>
                  <Link to="/speakers">Speakers</Link>
                </li>
                <li>
                  <Link to="/earphones">Earphones</Link>
                </li>
              </ul> 
            </nav>

            {/* cart icon */}
            <button onClick={handleOnClick}>
              <img src={iconCart} alt="" />
            </button>

          </header>


          {/* cart modal */}
          {state.cartModal && 
            <CartModal />}

          {/* menu */}
          {isMenuVisible && 
          <div className="">
            <Menu/>
          </div>}
          
        </>
    )
}