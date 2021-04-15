import { useContext } from "react";
import { StoreContext } from "../store"

export default function Date() {
  const { state: { date } } = useContext(StoreContext);

  return(
    <div className="date">
      {/* {date} */}
      {localStorage.getItem("date")}
    </div>
  );
}