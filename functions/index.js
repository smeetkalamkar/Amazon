const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51LuYwuSIe0TjOjlAlg5cnrqrzwv7KLnZNcxT8w4vOpd6vHVMoy17CCJpMQSgvZz1CofYByrU1n2BWwt9yeue1Mo000yApdavTm")


const app = express();

app.use(cors({origin : true}));
app.use(express.json());

//  Api routes

app.get("/",(req,res)=>{
    res.status(200).send("Hello Smeet")
})


app.post("/payments/create", async(request,response)=>{
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"inr"
    })

    console.log(paymentIntent)

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
      });
})

exports.api = functions.https.onRequest(app);

//    http://127.0.0.1:5001/project-6baf9/us-central1/api
