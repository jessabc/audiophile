import {  Link } from "react-router-dom";


export default function Footer() {

    return  (
        <div className="relative">
            <footer className="bg-dark flex flex-col justify-center items-center px-8 py-20 gap-14 md:px-12 md:items-start">

            <div className="bg-orange w-1/3 h-1 absolute top-0 md:w-1/5 md:left-0"></div>

            {/* logo */}
            <img src='../../../public/assets/shared/desktop/logo.svg' alt="" />

            {/* nav */}
            <nav className="font-bold text-white text-sm leading-6 tracking-widest uppercase text-center  ">
              <ul className="flex flex-col gap-3 md:flex-row ">
                <li className="hover:text-orange">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-orange">
                  <Link to="/headphones">Headphones</Link>
                </li>
                <li className="hover:text-orange">
                  <Link to="/speakers">Speakers</Link>
                </li>
                <li className="hover:text-orange">
                  <Link to="/earphones">Earphones</Link>
                </li>
              </ul>
            </nav>

            <p className="font-medium leading-6 text-center text-white opacity-50 md:text-left">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>

            <div className="flex flex-col justify-center items-center  gap-14 md:flex-row md:justify-between md:w-full">
              <p className="leading-6 text-center text-white opacity-50">Copyright 2021. All Rights Reserved</p>

              {/* socials */}
              <div className="flex gap-5">
                  <img src='assets/shared/desktop/icon-facebook.svg' alt="" />
                  <img src='/assets/shared/desktop/icon-twitter.svg'alt="" />
                  <img src='/assets/shared/desktop/icon-instagram.svg' alt="" />
              </div>
            </div>
            

          </footer>
        </div>
    )
}