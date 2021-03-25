import React,{useState} from 'react'
import Basket from './Basket'
import Header from './Header'
import Main from './Main'
import Data from './Data'

function Products() {
    const {products}=Data;
     const [cartItems, setCartItems] =useState([]); 
     const addToCart =(product)=>{
       const productExist =cartItems.find(x=>x.id===product.id)
       if(productExist){
         setCartItems(cartItems.map(x=>x.id===product.id ?{...productExist,quantity:productExist.quantity +1}: x)
         )}
         else {
           setCartItems([...cartItems,{...product,quantity:1}])
         }
         
     }
    return (
        <div>
          <Header/>  
          <div className='row'>
          <Main products={products} addToCart={addToCart} />
          <Basket cartItems={cartItems} addToCart={addToCart}/>
          </div>
        </div>
    )
}

export default Products
   