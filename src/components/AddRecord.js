import { useEffect, useContext } from "react";
import { StoreContext } from "../store"
// import { addCartItem } from "../actions";

export default function AddRecord() {
  // const { state: { cartItems, productDetail: { product, qty } }, dispatch } = useContext(StoreContext);

  const addRecord = (e) => {
    e.preventDefault();

    const formElement = document.getElementById("form");
    const ps = formElement[0].value;
    const cost = formElement[1].value;
    console.log(ps);
    console.log(cost);
    // addRecord(dispatch, ps, cost);
    document.getElementById("form").reset();
  };

  // useEffect(()=>{
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [函數])

  return (
    <input className="inputForm-ok" type="submit" value="OK !" onClick={addRecord}/>
  );
}
