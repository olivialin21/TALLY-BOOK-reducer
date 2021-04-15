import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
import {
  // ADD_RECORD,
  // REMOVE_RECORD,
  // EDIT_RECORD,
  SET_DATE,
} from "../utils";

export const StoreContext = createContext();
let date = localStorage.getItem("date")
  ? localStorage.getItem("date")
  : " ";

const initialState = {
  date: new Date(),
  info: [],
};

function reducer(state, action) {
  switch (action.type) {
    case SET_DATE:
      date = {
        ...state,
        date: action.payload,
      };
      return {
        ...state,
        date: action.payload,
      };
//     case SET_NAVBAR_ACTIVEITEM:
//       return {
//         ...state,
//         navBar: {
//           activeItem: action.payload,
//         },
//       };
//     case ADD_CART_ITEM:
//       const item = action.payload;
//       const product = state.cartItems.find((x) => x.id === item.id);
//       if (product) {
//         cartItems = state.cartItems.map((x) =>
//           x.id === product.id ? item : x
//         );
//         return { ...state, cartItems };
//       }
//       cartItems = [...state.cartItems, item];
//       return { ...state, cartItems };
//     case REMOVE_CART_ITEM:
//       cartItems = state.cartItems.filter((x) => x.id !== action.payload);
//       return { ...state, cartItems };
//     case SET_PRODUCT_DETAIL:
//       return { ...state, productDetail: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState
  );
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}