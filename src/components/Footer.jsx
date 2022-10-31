import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {

    const countries = ["Australia","Brazil","Canada","China","france","Germany","Italy","Japan","Mexico","Netherlands","Poland","Singapore",
"Spain","Turkey","United Arab Emirates","United Kingdom","United States"]
  return (
    <div>
    <div className="footer">
      <div className="footer__column">
        <div className="footer__title">Get to Know Us</div>

        <div className="footer__links">
          <a href="">About Us</a>
          <a href="">Careers</a>
          <a href="">Press Releases</a>
          <a href="">Amazon Science</a>
        </div>
      </div>
      <div className="footer__column">
      <div className="footer__title">Connect With Us</div>

<div className="footer__links">
  <a href="">Facebook</a>
  <a href="">Twitter</a>
  <a href="">Instagram</a>
  
</div>
      </div>


      <div className="footer__column">
      <div className="footer__title">Make Money with Us</div>

<div className="footer__links">
  <a href="">Sell on Amazon</a>
  <a href="">Sell under Amazon Accelerator</a>
  <a href="">Amazon Global Selling</a>
  <a href="">Become an Affiliate</a>
  <a href="">Fulfillment by Amazon</a>
  <a href="">Advertise your Products</a>
  <a href="">Amazon Pay on Merchants</a>
</div>
      </div>
      <div className="footer__column">

      <div className="footer__title">Let Us Help You</div>

<div className="footer__links">
  <a href="">COVID-19 and Amazon</a>
  <a href="">Your Account</a>
  <a href="">Returns Centre</a>
  <a href="">100% Purchase Protection</a>
  <a href="">Fulfillment by Amazon</a>
  <a href="">Amazon App Download</a>
  <a href="">Amazon Assistent Download</a>
  <a href="">Help</a>
</div>
      </div>
    </div>

    <div className="footer__sub">
        <div className="footer__sub__box">
        <Link to={"/"}>
      <img
        className="footer__sub__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </Link>

      <div className="footer__sub__lang">
      <i class="fa-solid fa-globe"></i>
      <span className="lang">English</span>
      <i class="fa-solid fa-sort"></i>

      </div>
        </div>

        <div className="footer__sub__links">
           {
            countries.map((elem)=>{
                return <a href="" className="countries__links">{elem}</a>
            })
           }
        </div>
    </div>
    </div>
  );
};

export default Footer;
