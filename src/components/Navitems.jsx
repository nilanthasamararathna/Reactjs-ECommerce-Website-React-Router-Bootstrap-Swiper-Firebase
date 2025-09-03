import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png'

const Navitems = () => {
 
  const [menuToggle, setMenuToggle] = useState(false); 
  const [socialToggle, setSocialToggle] = useState(false); 
  const [headerFixed, setHeaderFixed] = useState(false);

  //addEventListener

  window.addEventListener("scroll", () => {
    if(window.scrollY > 200){
      setHeaderFixed(true)
    }else{
      setHeaderFixed(false)
    }
  })

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
      {/* header top starts */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className='lab-btn me-3'><span>Create Account</span></Link>
            <Link to="/login" className='lab-btn'><span>Login</span></Link>
          </div>
        </div>
      </div>
       {/* header bottom starts */}
       <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                <img src={logo} alt="" />
                </Link>
              </div>
              </div>
              {/* Menu area */}
              <div className="menu-area">
                <div className="menu">
                  <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/"}>Shop</Link></li>
                    <li><Link to={"/"}>Blog</Link></li>
                    <li><Link to={"/"}>About</Link></li>
                    <li><Link to={"/"}>Contact</Link></li>                    
                  </ul>
                </div>
                <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block '><span>Create Account</span></Link>
               <Link to="/login" className='d-none d-md-block'><span>Login</span></Link>
                {/* Menu Toggler */}
               <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
                </div>
                {/* Social Toggler */}
               <div onClick={() => setSocialToggle(!socialToggle)} className="ellepsis-bar d-md-none">
               <i className="icofont-info-square"></i>
                </div>
             
            </div>
          </div>
        </div>
       </div>
    </header>
  )
}

export default Navitems