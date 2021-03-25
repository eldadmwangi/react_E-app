import React from 'react'
import ProductDisplay from './ProductDisplay'



function Main(props) {
    const {products,addToCart}= props;
    return (
        <main className='block col-2'>
            <h2>Our Top Products</h2>
            <div className='row'>
              {products.map((product)=>(
                 <ProductDisplay key={product.id} product={product} addToCart={addToCart}  />
              ))}  
            </div>
        </main>
    )
}  

export default Main
 