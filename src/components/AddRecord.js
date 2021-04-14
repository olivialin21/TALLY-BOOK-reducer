import { useEffect, useContext } from "react";
import { StoreContext } from "../store"
// import { addCartItem } from "../actions";

export default function AddRecord() {
  // const { state: { cartItems, productDetail: { product, qty } }, dispatch } = useContext(StoreContext);

  const addRecord = () => {

    const formElement = document.getElementById("form");
    const ps = formElement[0].value;
    const cost = formElement[1].value;
    console.log(ps);
    console.log(cost);
    // addRecord(dispatch, product, qty);
  };

  // useEffect(()=>{
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [函數])

  return (
    <input className="inputForm-ok" type="submit" value="OK !" onClick={addRecord}/>
    // <Button type="primary" className="btn-tocar" onClick={addToCart}>
    //   <CartIcon size={20} />
    //   <span style={{ marginLeft: 12 }}>Add To Shopping Bag</span>
    // </Button>
  );
}
