import { useContext, useEffect } from 'react';
import { StoreContext } from "../store";
import { addRecord } from "../actions";
import sound from "../audios/coin.mp3";

export default function AddRecord() {
  const { state: { record , aClass }, dispatch } = useContext(StoreContext);
  useEffect(()=>{
    localStorage.setItem("record", JSON.stringify(record));
  }, [record])

  const date = localStorage.getItem("date") ? localStorage.getItem("date") : new Date();
  
  const submitRecord = () => {
    const formElement = document.getElementById("form");
    const ps = formElement[0].value;
    const cost = formElement[1].value;

    if (localStorage.getItem("class") !== "" && ps !== "" && cost !== ""){
      (new Audio(sound)).play();
      addRecord(dispatch, date, aClass, ps, cost);
      document.getElementById("form").reset();
      document.getElementById(localStorage.getItem("class")).classList.remove("classItem--active");
      localStorage.setItem("class","");
    } else {
      alert("您還沒有選擇類別或填滿表格喔！");
    }
  };

  return (
    <input className="animate__animated animate__bounce inputForm-ok" type="button" value="OK !" onClick={submitRecord}/>
  );
}
