import {  Link } from "react-router-dom";
import logo from '../../../public/assets/shared/desktop/logo.svg'
import iconFacebook from '../../../public/assets/shared/desktop/icon-facebook.svg'
import iconTwitter from '../../../public/assets/shared/desktop/icon-twitter.svg'
import iconInstagram from '../../../public/assets/shared/desktop/icon-instagram.svg'


export default function Footer() {

    return  (
        <div>
            <footer className="bg-green-500">

            {/* logo */}
            <img src={logo} alt="" />

            <nav className="">
              <ul>
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

            <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>

            <p>Copyright 2021. All Rights Reserved</p>

            <div className="flex">
                <img src={iconFacebook} alt="" />
                <img src={iconTwitter} alt="" />
                <img src={iconInstagram} alt="" />
            </div>

          </footer>
        </div>
    )
}