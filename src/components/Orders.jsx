import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import CheckOutProduct from './CheckOutProduct';
import CurrencyFormat from "react-currency-format";

import  "./Orders.css"
import { getBasketTotal } from './reducer';
const Orders = () => {

    const {state,dispatch} = useContext(CartContext);
   
    console.log(state)
  return (
    <div className='order'>
        <h2>My Orders</h2>

        {state.orders?.map(item => (
                <CheckOutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}

          <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={getBasketTotal(state.orders)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />   
    </div>
  )
}

export default Orders