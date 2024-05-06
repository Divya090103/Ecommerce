import { React,useState} from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CgMenu, CgClose } from "react-icons/cg";
import Logo from "./Logo"
const Navbar=()=>{
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return(
  <>
  <nav>
    <div className="container main">
      <div className="flex-row d-flex justify-content-between">
        <Logo className="logo"/>
        <div className="mobile-navbar-btn text-dark" onClick={toggleNav}>
            {isNavOpen ? <CgClose className="mobile-nav-icon close-icon" /> : <CgMenu className="mobile-nav-icon" />}
          </div>
      </div>
      <div className="navbar-links">
     
        <ul className={`nav-list ${isNavOpen ? 'open' : ''}`}>
          <li><NavLink  className="list me-5 fs-5" to='/'>Home</NavLink></li>
          <li><NavLink  className="list me-5 fs-5" to='/about'>About</NavLink></li>
          <li><NavLink  className="list me-5 fs-5" to='/product'>Products</NavLink></li>
          <li><NavLink  className="list me-5 fs-5" to='/contact'>Contact</NavLink></li>
          <li><button className="btn btn-primary">Login</button></li>
          <li className="icon text-light ms-5"><NavLink className="fs-5 list" to='/cart'><FaCartShopping /><span className="cart-items">9</span></NavLink></li>

        </ul>
      
      </div>
    </div>
    </nav></>
  )
}
export default Navbar;