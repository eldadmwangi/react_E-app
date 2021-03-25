import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

function Header(props) {
    return (
      <header className='row block center'>
        <div>
            <Link to ='#/'>
                <h5>Shopping cart</h5>
            </Link>
        </div>
        <div>
            <Link to ='/cart'>Cart</Link>  <Link to ='/sigh-in'>Sigh In</Link>
           
        </div>
      </header>
    )
}

export default Header
 