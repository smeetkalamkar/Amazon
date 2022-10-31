import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  const slides = [
    "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61UrRx+3LLL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71YAVNgnKCL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61X7k9mBJ2L._SX3000_.jpg",
  ];

     const [curr,setCurr] = useState(0);

     useEffect(()=>{
    const id =  setInterval(()=>{
        if(curr==slides.length-1){
          setCurr(0)
        }
        else{
          setCurr(curr+1)
        }
       },3000);

 return ()=> clearInterval(id)
       
     },[curr])

       
  return (
    <div className="home">
      <div className="home__container">
        <img
          src={slides[curr]}
          alt=""
          className="home__image"
        />
      </div>

      <div className="home__row">
        <Product
          id={2234}
          title={
            "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          }
          price={699}
          image={
            "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
          }
          rating={3}
        />
        <Product
          id={9887}
          rating={4}
          title={
            "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          }
          price={699}
          image={
            "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
          }
        />
      </div>

      <div className="home__row">
        <Product
          rating={5}
          id={1233}
          title={
            "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          }
          price={699}
          image={
            "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
          }
        />

        <Product
          id={3434}
          rating={2}
          title={
            "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          }
          price={699}
          image={
            "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
          }
        />

        <Product
          id={3434}
          rating={1}
          title={
            "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          }
          price={699}
          image={
            "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
          }
        />
      </div>

      <div className="home__row">
        <Product
          rating={4}
          id={8769}
          title={
            "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          }
          price={699}
          image={
            "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Home;
