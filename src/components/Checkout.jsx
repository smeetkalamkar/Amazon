import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import "./Checkout.css"
import CheckOutProduct from './CheckOutProduct'
import Subtotal from './Subtotal'
const Checkout = () => {
  const state = useContext(CartContext);
  const basket = state.state.basket;
  
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className='checkout__ad' />
        <div className='checkout__title'>
          <h2 >Your Shopping Basket</h2>
          {
            basket.map((item)=>{
              return <CheckOutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            })
          }
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout