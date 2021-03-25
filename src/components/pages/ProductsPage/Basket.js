import React from 'react'

function Basket(props) {
    const {cartItems,addToCart} =props;
    return (
        <aside className='block col-1'>
            <h2>Cart items</h2>
            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
            {cartItems.map((item)=>(
               <div key={item.id} className='row'>
                   <div className='col-2'>{item.name}</div>
               <div className='col-2'>
                   <button onClick={()=>addToCart(item)} className='add'>+</button>
               </div>
               {/* <div>
                   <button onClick={()=>removeFromCart(item)} className='remove'>-</button>
               </div> */}
               <div className='col-2 text-right'>
                   {item.quantity} * ${item.price.toFixed(2)}
               </div>
               </div>
               
            ))} 
        </aside>
    )
}

export default Basket
