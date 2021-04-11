// import { useContext } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Class from "../components/Class";
import Record from "../components/Record";
import InputForm from "../components/InputForm";
// import { StoreContext } from "../store";

function Setting() {
  return (
    <div className="container-fluid">
      <Header/>
      <Navbar/>
      <div className="container">
        <Class/>
        <div className="row">
          <Record/>
          <InputForm/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Setting;