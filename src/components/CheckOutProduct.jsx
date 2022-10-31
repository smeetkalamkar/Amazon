import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import "./CheckOutProduct.css"

const CheckOutProduct = ({id,image,title,price,rating,hideButton}) => {
  const {state,dispatch} = useContext(CartContext);

    console.log(rating)

    const removeFromBasket = ()=>{
      //remove item from basket
      dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id
      })
    }
  return (
    <div className='CheckOutProduct'>
        <img src={image} alt="" className='CheckOutProduct__image' />
        <div  className='CheckOutProduct__productinfo'>
           <p  className='CheckOutProduct__title'>{title}</p>
           <p  className='CheckOutProduct__price'>
            <small>₹</small>
            <strong>{price}</strong>
           </p>

           <div  className='CheckOutProduct__rating'>
                 {
                   Array(rating).fill(3).map(()=><span className='product__stars' >&#9733;</span>)

                   }
                 
           </div>
           {!hideButton && (
                       <button className='CheckOutProduct__button' onClick={removeFromBasket}>Remove from Basket</button>

                )}
        </div>
    </div>
  )
}

export default CheckOutProduct