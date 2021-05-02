import { useContext, useEffect } from 'react';
import { StoreContext } from "../store";
import { chooseClass } from "../actions";

export default function Class() {
  const { state:{aClass}, dispatch } = useContext(StoreContext);

  useEffect(()=>{
    if (aClass!==""){
      if (localStorage.getItem("class")){
        document.getElementById(localStorage.getItem("class")).classList.remove("classItem--active");
      }
      document.getElementById(aClass).classList.add("classItem--active");
      localStorage.setItem("class",aClass);
    }
  },[aClass]);
  
  const clickEat = () => {
    chooseClass(dispatch,"eat");
  }
  const clickClothes = () => {
    chooseClass(dispatch,"clothes");
  }
  const clickLive = () => {
    chooseClass(dispatch,"live");
  }
  const clickIn = () => {
    chooseClass(dispatch,"in");
  }
  const clickTraffic = () => {
    chooseClass(dispatch,"traffic");
  }
  const clickPlay = () => {
    chooseClass(dispatch,"play");
  }
  const clickElse = () => {
    chooseClass(dispatch,"else");
  }

  return(
    <div className="classes">
      <div className="row d-flex">
        <div className="col-lg col-6 class-rwd-l">
          <div id="eat" onClick={clickEat} className="classItem">食</div>
        </div>
        <div className="col-lg col-6">
          <div id="clothes" onClick={clickClothes} className="classItem">衣</div>
        </div>
        <div className="col-lg col-4 class-rwd-l">
          <div id="live" onClick={clickLive} className="classItem">住</div>
        </div>
        <div className="col-lg col-4 class-rwd-c">
          <div id="in" onClick={clickIn} className="classItem classItem-in">收</div>
        </div>
        <div className="col-lg col-4">
          <div id="traffic" onClick={clickTraffic} className="classItem">行</div>
        </div>
        <div className="col-lg col-6 class-rwd-l">
          <div id="play" onClick={clickPlay} className="classItem">樂</div>
        </div>
        <div className="col-lg col-6">
          <div id="else" onClick={clickElse} className="classItem">其</div>
        </div>
      </div>
    </div>
  );
}