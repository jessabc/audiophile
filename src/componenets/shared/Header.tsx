import {  Link } from "react-router-dom";
import logo from '../../../public/assets/shared/desktop/logo.svg'
import iconCart from '../../../public/assets/shared/desktop/icon-cart.svg'
import iconHamburger from '../../../public/assets/shared/tablet/icon-hamburger.svg'
import CartModal from '../modals/CartModal'
import { useState } from "react";
import { useContext } from 'react'
import {ProductContext} from '../../ProductContext'
import Menu from "./Menu";


export default function Header() {

  const {state, dispatch, isOpen, setIsOpen} = useContext(ProductContext)

  const [isMenuVisible, setIsMenuVisible] = useState(false)

    return  (
       <>
          <header className="flex justify-between bg-black">

            <button className="lg:hidden">
              <img src={iconHamburger} alt="" onClick={()=>setIsMenuVisible(prev=> !prev)}/>
            </button>

            {/* logo */}
            <img src={logo} alt="" />

            {/* hidden nav on mobile and tablet */}
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

            <button onClick={() => setIsOpen(true)}>
              <img src={iconCart} alt="" />
            </button>

            {isOpen && <CartModal />}
          </header>

          {isMenuVisible && 
          <div className="">
            <Menu/>
          </div>}
          
        </>
    )
}