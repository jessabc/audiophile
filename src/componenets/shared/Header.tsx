import logo from '/src/assets/shared/desktop/logo.svg'
import iconCart from '/src/assets/shared/desktop/icon-cart.svg'
import iconHamburger from '/src/assets/shared/tablet/icon-hamburger.svg'
import CartModal from '../modals/CartModal'
import { useState } from "react"
import { useContext } from 'react'
import {ProductContext} from '../../ProductContext'
import MenuModal from "../modals/MenuModal"
import { NavLink } from "react-router-dom"


export default function Header() {

  const [isMenuModalVisible, setIsMenuModalVisible] = useState(false)

  const {state, dispatch} = useContext(ProductContext)
 
  function handleOnClick() {
    dispatch({type:'CART_MODAL', payload: true})
  }

    return  (
       <>
          <header className="fade-in flex justify-between bg-black px-8 py-10 border-b border-gray md:px-12 md:justify-start md:gap-10 lg:px-32 lg:gap-16">

            {/* hamburger on small screen */}
            <button 
              className="lg:hidden" 
              onClick={()=>setIsMenuModalVisible(prevState => !prevState)}
            >
              <img src={iconHamburger} alt="hamburger icon" />
            </button>

            {/* audiophile logo */}
            <NavLink to='/' >
                <img src={logo} alt="audiophile logo" />
            </NavLink>

            {/* nav on tablet and desktop */}
            <nav className="font-bold text-white text-sm leading-6 tracking-widest uppercase text-center hidden lg:block ">
              <ul className="flex flex-col gap-3 md:flex-row">
                <li className="hover:text-orange">
                  <NavLink to="/" 
                    className={({ isActive }) =>isActive ? 'text-orange' : undefined}>Home
                  </NavLink>
                </li>
                <li className="hover:text-orange">
                  <NavLink to="/headphones" 
                    className={({ isActive }) => isActive ? 'text-orange' : undefined}>Headphones
                  </NavLink>
                </li>
                <li className="hover:text-orange">
                  <NavLink to="/speakers" 
                    className={({ isActive }) => isActive ? 'text-orange' : undefined}>Speakers
                  </NavLink>
                </li>
                <li className="hover:text-orange">
                  <NavLink to="/earphones" 
                    className={({ isActive }) => isActive ? 'text-orange' : undefined}>Earphones
                  </NavLink>
                </li>
              </ul>
            </nav>
 
            {/* cart icon */}
            <button 
              className='md:ml-auto' 
              onClick={handleOnClick}
            >
              <img src={iconCart} alt="cart icon" />
            </button>

          </header>

          {/* cart modal */}
          {state.cartModal && 
          <CartModal />}

          {/* menu */}
          {isMenuModalVisible && 
          <div className="">
            <MenuModal  isMenuModalVisible={isMenuModalVisible} setIsMenuModalVisible={setIsMenuModalVisible}/>
          </div>}
        
        </>
    )
}