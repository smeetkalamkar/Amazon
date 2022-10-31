import React from 'react'
import {Routes,Route} from "react-router-dom"
import Checkout from './Checkout'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import { Payments } from './Payments'
import Orders from './Orders'
const MainRoutes = () => {

  const promise = loadStripe("pk_test_51LuYwuSIe0TjOjlAwtEgBTURaGrqoN54oAUscdcr5T2m7o9Foo4hGKAMbBTGCSKnrSw55BUuxp8Q7Hz6IqrENEOb00rSTTfId4")
  return (
    <Routes>
     
     <Route path="/"   element={<Home/>} />
     <Route path="/checkout"   element={<Checkout/>} />
     <Route path="/login"   element={<Login/>} />
     <Route path="/orders"   element={<Orders/>} />
     <Route path="/payments"   element={ <Elements  stripe={promise}><Payments/></Elements>} />
    </Routes>
  )
}

export default MainRoutes