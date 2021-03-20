import React,{useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {MdFingerprint} from 'react-icons/md'
import {Button} from './Button'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton]= useState(true)
    const handleClick=()=>{ setClick(!click)}
    const closeMobileMenu=()=>setClick(false) 
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }  
        }
    window.addEventListener('resize', showButton)
    

    return (
        <>
           <div className='navbar'> 
           <div className='navbar-container' >
               
               <Link to = '/'className= 'navbar-logo'>
                   <MdFingerprint className='navbar-icon'/>
                   Eldad-shop
               </Link>
               
               <div className= 'menu-icon' onClick={handleClick}>
                 {click ? <FaBars/> : <FaTimes/>}
               </div>
               <ul className={ click? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                  <Link to ='/' className='nav-links'>
                      Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to ='/Products' className='nav-links'>
                      Products
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to ='/Services' className='nav-links'>
                      Services
                  </Link>
                </li>
                <li className='nav-btn'>
                    {button ? (
                        <Link to ='/sign-up' className='btn-link'>
                        <Button buttonStyle ='btn-outline'>
                        Sign Up
                        </Button> 
                        </Link>) : (
                            <Link to ='/sign-in' className='btn-link'>
                                <Button buttonStyle='btn--outline'
                                buttonSize ='btn--mobile'>
                                Sign In
                                 </Button>
                            </Link>
                        )
                    }
                  
                </li>
               </ul>
           </div>
               </div>                                                                

        </>
        
    )
}

export default Navbar