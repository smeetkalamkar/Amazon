export const initialState = {
    basket:[],
    orders:[],
    user:null
}

export const getBasketTotal = (basket)=>{
    return basket?.reduce((amount,item)=>{
        return item.price + amount
    },0)
};

const reducer = (state,action)=>{
    
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket,action.payload]
            }

            case "REMOVE_FROM_BASKET":
               const index = state.basket.findIndex(
                (basketItem) =>  basketItem.id === action.id
               );

               const newBasket = [...state.basket]
               if(index>=0){
                newBasket.splice(index,1)
               }
             
             
               return {
                ...state,
                basket:newBasket
               }

               case "SET_USER" :
                
               
                return {...state,
               user:action.user}
               
               case "EMPTY_BASKET" :
                return {
                    ...state,
                    basket:[]
                }

                case "ADD_TO_ORDERS" :
                    return {
                        ...state,
                        orders:action.payload
                    }


                
            default:
               
            return state;
    }
   
}

export default reducer