import React ,{useState} from 'react'
import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react'
import './MainNavBar.css';

function MainNavBar() {
    const [isOpen, setOpen] = useState(false)

    const [click, setClick] = useState(false);


  const handleClick = () => {
     
     setOpen(!isOpen);
     setClick(!click);
  }


    return ( 
        <>
            <div className='navbar'>
       
       
        <NavLink
        style={({isActive})=>{
          return {color : isActive?'#FE6D73': '#353755'}
         }}
        className='nav-links' to='/contactus' >تماس با ما</NavLink>
        <NavLink
        style={({isActive})=>{
          return {color : isActive?'#FE6D73': '#353755'}
         }}
        className='nav-links' to='/aboutus' >درباره ما</NavLink>
        <NavLink
        style={({isActive})=>{
          return {color : isActive?'#FE6D73': '#353755'}
         }}
        className='nav-links' to='/orders' >ثبت سفارش</NavLink>
        <NavLink
        style={({isActive})=>{
          return {color : isActive?'#FE6D73': '#353755'}
         }}
        className='nav-links' to='/products' >محصولات</NavLink>
        <NavLink
        style={({isActive})=>{
          return {color : isActive?'#FE6D73': '#353755'}
         }}
        className='nav-links' to='/' >خانه</NavLink>

        {/* **************************Mobile*************************** */}
        <div className={click ? 'nav-menu' : 'nav-menu-closed'}>
        <NavLink onClick={()=> handleClick()} className='nav-links-mobile' to='/' >خانه</NavLink>
        <NavLink onClick={()=> handleClick()} className='nav-links-mobile' to='/products' >محصولات</NavLink>
        <NavLink onClick={()=> handleClick()} className='nav-links-mobile' to='/orders' >سفارش</NavLink>

        <NavLink onClick={()=> handleClick()} className='nav-links-mobile' to='/aboutus' >درباره ما</NavLink>
        <NavLink onClick={()=> handleClick()} className='nav-links-mobile' to='/contactus' >تماس با ما</NavLink>

        
        
        
        </div>
        <div className='hamberger'>
        <Hamburger 
         
         color="#4FD1C5"
         toggled={isOpen} 
         toggle={setOpen} 
         onToggle={toggled => {
          if (toggled) {
            handleClick()
          } else {
            handleClick()
          }
        }}
         />
        </div>
        
        
       </div>
        </>
     );
}

export default MainNavBar;