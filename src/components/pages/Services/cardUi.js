import React from 'react'
import web1 from './images/web1.jpeg'
import './card.css';

function cardUi(title, imageUrl,body ) {
    return (
        <>
        <div className='card-container'>
            <a href='#' className='image-container'>
               <div className='card-image'> <img src={web1} alt='web1'/>  </div>
               <div className='card-content'>
               <div className='image-title' style={{color:'black'}}>Web Development</div>
           <div className='card-body'>
               <p style={{color:'black'}}>
                   Lorem ipsum bla bla bla <br/>lorem ipsum<br/> bla bla bla 
               </p>
           </div>
           <div className='card-info' style={{color:'black'}}> More info</div>
               </div>
           </a>

           <a href='#' className='image-container'>
               <div className='card-image'> <img src={web1} alt='web1'/>  </div>
               <div className='card-content'>
               <div className='image-title' style={{color:'black'}}>Web Hosting</div>
           <div className='card-body'>
               <p style={{color:'black'}}>
                   Lorem ipsum bla bla bla <br/>lorem ipsum<br/> bla bla bla 
               </p>
           </div>
           <div className='card-info' style={{color:'black'}}> More info</div>
               </div>
           </a>

           <a href='#' className='image-container'>
               <div className='card-image'> <img src={web1} alt='web1'/>  </div>
               <div className='card-content'>
               <div className='image-title' style={{color:'black'}}>Quality Testing</div>
           <div className='card-body'>
               <p style={{color:'black'}}>
                   Lorem ipsum bla bla bla  <br/>lorem ipsum<br/> bla bla bla 
               </p>
           </div>
           <div className='card-info' style={{color:'black'}}> More info</div>
               </div>
           </a>

           <a href='#' className='image-container'>
               <div className='card-image'> <img src={web1} alt='web1'/>  </div>
               <div className='card-content'>
               <div className='image-title' style={{color:'black'}}>Graphics Design</div>
           <div className='card-body'>
               <p style={{color:'black'}}>
                   Lorem ipsum bla bla bla <br/>lorem ipsum<br/> bla bla bla 
               </p>
           </div>
           <div className='card-info' style={{color:'black'}}> More info</div>
               </div>
           </a>

           <a href='#' className='image-container'>
               <div className='card-image'> <img src={web1} alt='web1'/>  </div>
               <div className='card-content'>
               <div className='image-title' style={{color:'black'}}>Database Administration</div>
           <div className='card-body'>
               <p style={{color:'black'}}>
                   Lorem ipsum bla bla bla  <br/>lorem ipsum<br/> bla bla bla 
               </p>
           </div>
           <div className='card-info' style={{color:'black'}}> More info</div>
               </div>
           </a>

           <a href='#' className='image-container'>
               <div className='card-image'> <img src={web1} alt='web1'/>  </div>
               <div className='card-content'>
               <div className='image-title' style={{color:'black'}}>Machine Checks</div>
           <div className='card-body'>
               <p style={{color:'black'}}>
                   Lorem ipsum bla bla bla <br/>lorem ipsum<br/> bla bla bla 
               </p>
           </div>
           <div className='card-info' style={{color:'black'}}> More info</div>
               </div>
           </a>
           
          
            
        </div>
        </>
    ) 
}

export default cardUi
