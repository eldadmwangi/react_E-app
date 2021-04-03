import React from 'react'
import './header.css'


function ProductDisplay(props) {
    const {product,addToCart} =props;
    return (
        <div>
           <img className='small' src={product.image} alt={product.name}/>
           <h3>{product.name}</h3>
           <div>${product.price}</div>
           <div>
               <button onClick={()=>addToCart(product)} >Add to cart</button>
           </div>
        </div>
     
    )
}
export default ProductDisplay
