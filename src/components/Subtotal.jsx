import React, { useContext } from 'react'
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'
import { getBasketTotal } from './reducer'
import "./Subtotal.css"
const Subtotal = () => {
  const {state} = useContext(CartContext);
  const  basket = state.basket;
 console.log(getBasketTotal(basket))
 const navigate = useNavigate()
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
           <p>
            Subtotal ({basket.length} items) : <strong>{value}</strong>
           </p>
            <small className='subtottal__gift'>
             <input type="checkbox" /> This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />
        <button onClick={()=>navigate("/payments")}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal