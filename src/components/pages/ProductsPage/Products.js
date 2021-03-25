import React from 'react'
import Basket from './Basket'
import Header from './Header'
import Main from './Main'
import Data from './Data'

function Products() {
    const {products}=Data;
    return (
        <div>
          <Header/>  
          <div className='row'>
          <Main products={products}/>
          <Basket/>
          </div>
        </div>
    )
}

export default Products
  