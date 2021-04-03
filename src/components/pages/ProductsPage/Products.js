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
     const removeFromCart=(product)=>{
       const productExist=cartItems.find((x)=>x.id===product.id);
       if(productExist.quantity===1){
         setCartItems(cartItems.filter((x)=>x.id !== product.id))
       } 
       else{
         setCartItems(cartItems.map((x)=>
         x.id===product.id ? {...productExist, quantity:productExist.quantity -1} :x
         ))
       }
     }
    return (
        <div>
          <Header/>  
          <div className='row'>
          <Main products={products} addToCart={addToCart} />
          <Basket cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>
          </div>
        </div>
    )
}

export default Products
   