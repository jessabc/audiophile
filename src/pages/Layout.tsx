import { Outlet,  useLocation } from "react-router-dom";
import Header from "../componenets/shared/Header";
import Footer from "../componenets/shared/Footer";
import About from "../componenets/shared/About";
import Menu from "../componenets/shared/Menu";


const Layout = () => {

  const location = useLocation() 

  return (
    <>
      <div className="font-display ">

        <Header/>

        <Outlet />

        {/* menu goes here on all pages except home page and checkout*/}
        {(location.pathname != '/' && location.pathname != '/checkout')  && <Menu />}

        {/* about goes here on all pages except checkout */}
        {location.pathname != '/checkout' && <About/>}

        <Footer/>
      </div>
 
    </>
  
  )
}

export default Layout