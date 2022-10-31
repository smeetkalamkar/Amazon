import React, { useContext, useEffect } from 'react'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-regular-svg-icons';
import "./Product.css"
import { CartContext } from './CartContext';
const Product = ({title,price,image,id,rating}) => {
  const {state,dispatch} = useContext(CartContext);

  const addToCart = ()=>{
    
   dispatch({
    type:"ADD_TO_BASKET",
    payload:{
      title,
      price,
      image
    }
   })
  }
  return (
    <div>
        <div className='product'>
           <div className='product__Info'>
             <p>{title}</p>
             <p className='product__price'>
                <small>₹</small>
                <strong>{price}</strong>
             </p>
             <div className='product__rating'>
              {
            Array(rating).fill("").map((_,i)=>{
              return <span className='product__stars' >&#9733;</span>

            })
              }
             </div>
           </div>
           <img src={image} alt="" className='product__image'/>
           <button className='product__button' onClick={addToCart}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product