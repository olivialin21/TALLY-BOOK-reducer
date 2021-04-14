import {
  // ADD_RECORD,
  // REMOVE_RECORD,
  // EDIT_RECORD,
  SET_DATE
} from "../utils";

// export const addCartItem = (dispatch, product, qty) => {
//   const item = {
//     id: product.id,
//     name: product.name,
//     image: product.image,
//     price: product.price,
//     countInStock: product.countInStock,
//     qty,
//   };
//   dispatch({
//     type: ADD_CART_ITEM,
//     payload: item,
//   });
// };

// export const removeCartItem = (dispatch, productId) => {
//   dispatch({
//     type: REMOVE_CART_ITEM,
//     payload: productId,
//   });
// };


// export const setProductDetail = (dispatch, productId, qty) => {
//   const product = products.find(
//     x => x.id === productId
//   );
  
//   if(qty === 0 && product.countInStock > 0)
//       qty = 1;

//   dispatch({
//     type: SET_PRODUCT_DETAIL,
//     payload: {
//       product,
//       qty,
//     }
//   })
// }

// export const pageContentsSet = (dispatch, title, products) => {
//   dispatch({
//     type: SET_PAGE_CONTENT,
//     payload: { title, products },
//   });
// };

export const setDate = (dispatch, date) => {
  dispatch({
    type: SET_DATE,
    payload: date,
  });
};
