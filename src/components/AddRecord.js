import { useEffect, useContext } from "react";
import { StoreContext } from "../store"
// import { addCartItem } from "../actions";

export default function AddRecord() {
  const { state: { date, aClass } , dispatch } = useContext(StoreContext);
  
  const addRecord = (e) => {
    e.preventDefault();
    const formElement = document.getElementById("form");
    const ps = formElement[0].value;
    const cost = formElement[1].value;
    console.log(ps);
    console.log(cost);
    // addRecord(dispatch, date, aClass, ps, cost);
    document.getElementById("form").reset();
    localStorage.setItem("info",[date, aClass, ps, cost])
  };

  // useEffect(()=>{
  //   localStorage.setItem("info",[date, aClass, ps, cost]);
  // }, [])

  return (
    <input className="inputForm-ok" type="submit" value="OK !" onClick={addRecord}/>
  );
}
