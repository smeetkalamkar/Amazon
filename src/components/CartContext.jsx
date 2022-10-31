import {createContext,useReducer} from "react";
import { initialState } from "./reducer";
import reducer from "./reducer";

export const CartContext = createContext(initialState);

export const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState)
   

return <CartContext.Provider value={{state,dispatch}}  >
    {children}
</CartContext.Provider>
}
    
