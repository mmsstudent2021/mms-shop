import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getData } from "../api";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {

    const [productList, setProductList] = useState([]);
    const [search, setSearch] = useState("");

    const initialState = {
        products: [],
        cart: [],
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case "GET_PRODUCTS":
                return {...state, products: action.payload};
            case "ADD_TO_CART":
                return {...state, cart:[...state.cart, {...action.payload, qty: 1}]};
            case "REMOVE_FROM_CART":
                return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async() => {
        const data = await getData('/products');
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, [])


    useEffect(() => {
        dispatch({type: "GET_PRODUCTS", payload: productList});
        const filterProducts = productList.filter(pd => pd.title.toLowerCase().includes(search.toLocaleLowerCase()));
        dispatch({type: "GET_PRODUCTS", payload: filterProducts});
    }, [productList, search])
    
    const data = {state, search, setSearch, dispatch};


    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);