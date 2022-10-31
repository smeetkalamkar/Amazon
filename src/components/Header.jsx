import React, { useContext, useReducer } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Header.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { CartContext } from "./CartContext";
const Header = () => {
  const {state} = useContext(CartContext);

  
  console.log(state)
const handleAuthentication = () =>{
  if(state.user){
   auth.signOut();
   console.log("sign out")
  }
}
  return (
    <div className="header">

      <Link to={"/"}>
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </Link>
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <div className="header__search__icon">
          <SearchIcon />
        </div>
      </div>
      
      <div className="header__nav">
        <Link to={!state.user && "/login" }   style={{textDecoration:"none"}}>
        <div className="header__option"  onClick={handleAuthentication}>
          <span className="optionLineOne">Hello,{state.user?.email}</span>
          <span className="optionLineTwo">{state.user ?"Sign out":"Sign in"}</span>
        </div>
        </Link>
        <Link to={"/orders"} style={{textDecoration:"none"}}>
        <div className="header__option">
          <span className="optionLineOne">Returns</span>
          <span className="optionLineTwo"> & Orders</span>
        </div>

        </Link>

    
       
        <div className="header__option">
          <span className="optionLineOne">Your</span>
          <span className="optionLineTwo">Prime</span>
        </div>

        
      </div>
      <Link to={"/checkout"} style={{textDecoration:"none"}}>
      <div className="header__cart">
        <ShoppingCartOutlinedIcon
          className="header__cartIcon"
          fontSize="large"
        />

        <p className="header__cartTag">Cart</p>
      </div>
      </Link>
    </div>
   
  );
};

export default Header;
