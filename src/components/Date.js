import { useContext } from "react";
import { StoreContext } from "../store"

export default function Date() {
  return(
    <div className="date">
      {localStorage.getItem("date")}
    </div>
  );
}