import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import {FaFire} from 'react-icons/fa'
import {BsXDiamondFill} from 'react-icons/bs'
import {GiCrystalize} from 'react-icons/gi'
import {IconContext} from 'react-icons/lib'
import './Pricing.css'

function Pricing() {
    return (
        <IconContext.Provider value={{color:'white',size:'64'}}>
        <div>
            <div className='pricing__section'>
                <div className='pricing__wrapper'>
                    <h1 className='pricing__heading'>Pricing</h1>
                    <div className='pricing__container'>
                        <Link to ='/sigh-up' className="pricing__container-card">
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <FaFire/>
                                </div>
                                <h3>Starter</h3>
                                <h4>$2.99</h4>
                                <p>Monthly</p>
                                <ul className='pricing__container-features'>
                                    <li>200 Transactions</li>
                                    <li> 3% Cashback</li>
                                    <li> $20,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'> Choose plan</Button>
                            </div>
                        </Link>
                        <Link to ='/sigh-up' className="pricing__container-card">
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <BsXDiamondFill/>
                                </div>
                                <h3>Diamond</h3>
                                <h4>$5.00</h4>
                                <p>Monthly</p>
                                <ul className='pricing__container-features'>
                                    <li>200 Transactions</li>
                                    <li> 5% Cashback</li>
                                    <li> $50,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'> Choose plan</Button>
                            </div>
                        </Link>
                        <Link to ='/sigh-up' className="pricing__container-card">
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <GiCrystalize/>
                                </div>
                                <h3>Platinum</h3>
                                <h4>$10.00</h4>
                                <p>Monthly</p>
                                <ul className='pricing__container-features'>
                                    <li> 1000Transactions</li>
                                    <li> 10% Cashback</li>
                                    <li> $100,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'> Choose plan</Button>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
            
        </div>
        </IconContext.Provider>
    )
}

export default Pricing
