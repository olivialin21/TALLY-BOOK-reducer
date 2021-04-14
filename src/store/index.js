// import { createContext } from "react";
// import useReducerWithThunk from "use-reducer-thunk";
// import {
//   ADD_RECORD,
//   REMOVE_RECORD,
//   EDIT_RECORD
// } from "../utils/constants";

// export const StoreContext = createContext();

// const initialState = {
//   temp_date: "",
//   info: [],
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case ADD_RECORD:
//       return {
//         ...state,
//         page: action.payload,
//       };
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
//     default:
//       return state;
//   }
// }

// export function StoreProvider(props) {
//   const [state, dispatch] = useReducerWithThunk(
//     reducer,
//     initialState,
//     "example"
//   );
//   const value = { state, dispatch };

//   return (
//     <StoreContext.Provider value={value}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// }