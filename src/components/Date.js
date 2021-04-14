import { useContext } from "react";
import { StoreContext } from "../store"

export default function Date() {
  const { state: {temp_date} } = useContext(StoreContext);
  console.log(temp_date);
  return(
    <div className="date">
      {temp_date}
    </div>
  );
}