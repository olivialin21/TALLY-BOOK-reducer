import { useContext } from "react";
import { StoreContext } from "../store"

export const CalSum = () => {
  const { state: { record } } = useContext(StoreContext);
  let totOut = 0;
  let totIn = 0;

  record.map(info=>{
    if (info.aClass==="in") {
      totIn += parseInt(info.cost);
    } else {
      totOut += parseInt(info.cost);
    }
  });

  return ([totIn,totOut]);
}

export const CalSumDay = () => {
  const { state: { record } } = useContext(StoreContext);
  let totOut = 0;
  let totIn = 0;

  record.map(info=>{
    if (info.date===localStorage.getItem("date")){
      if (info.aClass==="in") {
        totIn += parseInt(info.cost);
      } else {
        totOut += parseInt(info.cost);
      }
    }
  });

  return ([totIn,totOut]);
}