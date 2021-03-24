import React from 'react'
import './Footer.css'
import {Button} from '../../Button'
import {Link} from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'

function Footer() {
    
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    join us today and recieve latest news and trends
                </p>
                <p className='footer-subscription-text'>
                    Unsubscribe at any time
              </p>
              <div className='input-areas'>
                  <form>
                      <input
                      className='footer-input'
                      name='email'
                      type='email'
                      placeholder='Enter Email ..'
                      />
                      <Button buttonStyle='btn--outline'>Subscribe</Button>
                  </form>
              </div>
            </section>

            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to ='/sign-up'>How it works</Link>
                        <Link to ='/'>Testimonials</Link>
                        <Link to ='/'>Careers</Link>
                        <Link to ='/'>Investors</Link>
                        <Link to ='/'>Terms and Conditions.</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to ='/'>Contact</Link>
                        <Link to ='/'>Support</Link>
                        <Link to ='/'>Hotline</Link>
                        <Link to ='/'>Sponsorship</Link>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>Material</h2>
                            <Link to='/'>Download material</Link>
                            <Link to ='/'>Agency</Link>
                            <Link to ='/'>Portfolio</Link>
                            <Link to ='/'></Link>
                        </div>
                        <div className='footer-link-items'>
                        <h2>Social Media</h2>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
                        </div>
                    </div>
                </div>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <Link to ='/' className='social-logo'>
                                <MdFingerprint className='navbar-icon'/>
                                Eldad-shop
                            </Link>
                        </div>
                        <small className='website-rights'>Eldad-shop &copy; 2021</small>
                        <div className='social-icons'>

                        <Link className='social-icon-link'
                            to={'https://www.facebook.com/eldad.mwangi'}
                            target='_blank'
                            aria-label='Facebook'
                            >
                            <FaFacebook/>
                            </Link>
                          
                            <Link className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                            >
                            <FaInstagram/>
                            </Link>

                            <Link className='social-icon-link'
                            to={'//www.youtube.com/watch?v=vqBo0Bf7ds8&t=12s&ab_channel=WambuiMuraguri'}
                            target='_blank'
                            aria-label='Youtube'
                            >
                            <FaYoutube/>
                            </Link>

                            <Link className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                            >
                            <FaTwitter/>
                            </Link>

                            <Link className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                            >
                            <FaInstagram/>
                            </Link>
                            
                            <Link className='social-icon-link'
                            to={'//www.linkedin.com/in/eldad-mwangi-685351176/'}
                            target='_blank'
                            aria-label='LinkedIn'
                            >
                            <FaLinkedin/>
                            </Link>

                           
                            
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Footer

