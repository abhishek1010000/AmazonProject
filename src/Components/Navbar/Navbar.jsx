import logo from '../../assets/logo.png'
import flag from '../../assets/Flag_of_India.svg'
import './Navbar.css'
import { IoLocationOutline, IoSearchSharp  } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import BottomHeader from '../BottomHeader/BottomHeader'

function Navbar(){
    
    return (
      <div className="navbar">

      
        <nav className='nav1'>
          <div className="top-nav hov">
            <img src={logo} alt="logo" width={100}/>
            <span className='in'>.in</span>
          </div>
          <div className="location hov">
             <IoLocationOutline className='loc-icon' />
             <span className='del-loc'>Delivering to Lucknow 226004</span>
             <b className='up-loc'>Update location</b>
          </div>
          <div className="search-bar">
            <select name="" id="select">
              <option value="All">All</option>
              <option value="Alexa Skills">Alexa Skills</option>
              <option value="Amazon Fashion">Amazon Fashion</option>
              <option value="baby">Baby</option>
              <option value="books">Books</option>
              <option value="car">Car & Motobike</option>
              <option value="ele">Electronics</option>
            </select>
            <input type="text" />
            <IoSearchSharp  className='search-icon'/>
          </div>
          <div className="flag-lang hov">
            <img src={flag} alt="" width={25} height={25} />
            <select name="" id="select2">
              <option value="English">En</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
          <div className="sign-in-up hov">
            <p>Hello, sign in</p>
            <p>Account & Lists</p>
          </div>
          <div className="return-order hov">
            <p>Returns</p>
            <span className='order'>& Order</span>
          </div>
          <div className="add-to-card hov">
            <Link to="/cart" ><FaShoppingCart className="cart-icon" /></Link>
            <p className='cart'>Cart<span className='cart-items-count'>0</span></p>
          </div>
        </nav>
        <BottomHeader></BottomHeader>
        </div>
    )
}

export default Navbar