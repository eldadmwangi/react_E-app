import React from 'react'
import{Button} from './Button'
import {Link} from 'react-router-dom'
import './ComponentdetsSection.css'

function ComponentdetsSection({
    // all components details that we are need for the data files
    lightBg, topLine, lightText,lightTextDesc,headline,description,buttonLabel,img,alt,imgStart
}) {
    return (
        <>
         <div className={lightBg ? 'home__comp-section': 'home__comp-section darkBg'}>
                <div className='container'>
                <div className="row home__comp-row" style={{display:'flex', flexDirection:imgStart==='start'? 'row-reverse':'row'}}>
                    <div className='col'>
                        <div className='home__comp-text-wrapper'>
                            <div className='top-line'>
                                {topLine}</div>
                                <h1 className={lightText ? 'heading': 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__comp-subtitle': 'home__comp-subtitle dark'}>{description}</p>
                                <Link to= '/sign-up'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                                </Link>
                        </div>
                    </div> 
                    <div className='col'>
                        <div className='home__comp-img-wrapper'>
                             <img src={img} alt={alt} className='home__comp-img'/>
                        </div>
                    </div>
                </div>
             </div>
             </div>  
        </>
    )
}
export default ComponentdetsSection
