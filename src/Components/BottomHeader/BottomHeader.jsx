import './BottomHeader.css'
import { FaChevronRight } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import { useEffect, useRef, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";


const BottomHeader = () => {
  const ref=useRef();
    const [sidebar,setSidebar]= useState(false)
    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
         if(e.target.contains(ref.current)){
            setSidebar(false)
         }
        })
    },[ref,sidebar])
  return (
    <div className="bottom-header">
        <ul className='ul'>
            <li onClick={() => setSidebar(true)} className='header-bar'><FaBars />All</li>
            <li>Fresh</li>
            <li>Amazon MiniTv</li>
            <li>Sell</li>
            <li>Best Sellers</li>
            <li>Today Deals</li>
            <li>Mobiles</li>
            <li>Fashion</li>
            <li>Electronics</li>
            <li>Home & Kitchen</li>
            <li>New Releases</li>
            <li>Amazon Pay</li>
            <li>Customer Service</li>
            <li>Computers</li>
            <li>Books</li>
        </ul>
        {sidebar && (
        <div className="side-content">
          <div className="">
            <div ref={ref} className='parent'>
              <div className="hello-sign">
              <MdAccountCircle />
                <h3>
                  Hello, Sign In
                </h3>
              </div>
              <div className="side-extra">
              <div className="trending hh">
                <h3>Treding</h3>
                <p>Best sellers</p>
                <p>New Release</p>
                <p>Movers and Shakers</p>
              </div><hr />
              <div className="digital-content hh">
                <h3>Digital Content & Devices</h3>
                <p>Amazon miniTV-Free entertainment</p>
                <p>Echo & Alexa <FaChevronRight /></p>
                <p>Fire TV <FaChevronRight /></p>
                <p>Audible AudioBooks <FaChevronRight /></p>
                <p>Amazon Prime Video <FaChevronRight /></p>
                <p>Amazon Prime Music <FaChevronRight /></p>
              </div><hr />
              <div className="shop-cat hh">
                <h3>Shop by Category</h3>
                <p>Mobiles, Computers</p>
                <p>TV <FaChevronRight /></p>
                <p>Men's Fashion <FaChevronRight /></p>
                <p>Women's Fashion <FaChevronRight /></p>
              </div><hr />
              <div className="pr hh">
                <h3>Programs & Features</h3>
                <p>Amazon Pay</p>
                <p>Gift card & mobile recharge <FaChevronRight /></p>
                <p>Amazon Launchpad <FaChevronRight /></p>
                <p>Amazon Business <FaChevronRight /></p>
              </div><hr />
              <div className="hep-sett hh">
                <h3>Help & Settings</h3>
                <p>Your Account</p>
                <p>Customer Service <FaChevronRight /></p>
                <p>Sign in <FaChevronRight /></p>
              </div>
              </div>
            <span onClick={()=>setSidebar(false)} className='X' >
            <RiCloseLargeFill />
            </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BottomHeader