import { useContext, useEffect, useReducer } from 'react';
import './App.css';
import { CartContext } from './components/CartContext';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MainRoutes from './components/MainRoutes';
import reducer, { initialState } from './components/reducer';
import {auth} from "./firebase"

function App() {

  const {state,dispatch} = useContext(CartContext);

  useEffect(()=>{
      auth.onAuthStateChanged((authUser)=>{


        if(authUser){
          dispatch({
            type:"SET_USER",
            user:authUser
          })
        }
        else{
          dispatch({
            type:"SET_USER",
            user:null
          })
        }


      })
  },[])
  
  return (
    <div className="App">
      <Header/>
   <MainRoutes/>
   <Footer/>
    </div>
  );
}

export default App;
