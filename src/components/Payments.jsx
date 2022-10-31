import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import CheckOutProduct from "./CheckOutProduct";
import { loadstripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";

import "./Payments.css";
import { getBasketTotal } from "./reducer";
import { useEffect } from "react";
import axios from "axios";

export const Payments = () => {
  const {state,dispatch} = useContext(CartContext);
  const navigate = useNavigate()
  const user = state.user;
  const basket = state.basket;
  const stripe = useStripe();
  const elements = useElements();
  const [error,setError] = useState(null)
  const [disabled,setDisabled] = useState(true);
  const [succeeded,setSucceeded] = useState(false);
  const [processing,setProcessing] = useState("");
  const [clientSecret,setClientSecret] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{


      setSucceeded(true)
      setError(null)
      setProcessing(false);
      navigate("/orders");

      dispatch({
        type:"ADD_TO_ORDERS",
        payload:basket
      })
     
      dispatch({
        type:"EMPTY_BASKET",
        payload:basket
      })
    })


  


  };

  const handleChange = (e) => {
    console.log(e)
         setDisabled(e.empty)
         setError(e.error ?e.error.message:"")
  };


  useEffect(()=>{

    const getClientSecret = async () =>{

      if(getBasketTotal(basket)>=1){
        const response = await axios({
          method:"post",
          url:`http://127.0.0.1:5001/project-6baf9/us-central1/api/payments/create?total=${getBasketTotal(basket)*100}`
        })

        setClientSecret(response.data.clientSecret)
      }
       
    }
     getClientSecret()

    
  },[basket])

console.log("Secret is >>>>>>>> ",clientSecret)

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          {" "}
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Alankar nagar,Tidke Layout</p>
            <p>Nagpur,Maharashtra,India</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items And Delivery</h3>
          </div>

          <div className="payment__items">
            {basket.map((item) => {
              return (
                <CheckOutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">
            {/* stripe code will come here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal ({basket.length} items) :{" "}
                        <strong>{value}</strong>
                      </p>
                      <small className="subtottal__gift">
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
              </div>
              <button disabled={disabled || processing || succeeded}>
                <span>{processing ?<p>Processing</p> : "Buy Now"}</span>
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
