import React from 'react'

function Basket(props) {
    const {cartItems,addToCart, removeFromCart} =props;
    const itemsPrice =cartItems.reduce((a,c)=>a +c.price * c.quantity,0)
    const taxPrice = itemsPrice * 0.14;
    const shippingFee = itemsPrice>2000? 0 : 50;
    const totalPrice = itemsPrice +taxPrice + shippingFee;
    return (
        <aside className='block col-1'>
            <h2>Cart items</h2>
            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
            {cartItems.map((item)=>(
               <div key={item.id} className='row'>
                   <div className='col-2'>{item.name}</div>
               <div className='col-2'>
                   <button onClick={()=>addToCart(item)} className='add'> + </button>
               </div>
               <div>
                   <button onClick={()=>removeFromCart(item)} className='remove'> - </button>
               </div>
               <div className='col-2 text-right'>
                   {item.quantity} * ${item.price.toFixed(2)}
               </div>
               </div>
            ))} 
            {cartItems.length !==0 && (
                <>
                <hr></hr>
                <div className='row'>
                    <div className='col-2'>Items Price</div>
                    <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'>Tax</div>
                    <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'>Shipping fee</div>
                    <div className='col-1 text-right'>${shippingFee.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'><strong> Total Price</strong></div>
                    <div className='col-1 text-right'>${totalPrice.toFixed(2)}</div>
                </div>
                </>
            )}
        </aside>
    )
}
export default Basket
