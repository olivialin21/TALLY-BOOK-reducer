// import { useContext } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Class from "../components/Class";
import Date from "../components/Date";
import Record from "../components/Record";
import InputForm from "../components/InputForm";
// import { StoreContext } from "../store";

function Input() {
  return (
    <div className="container-fluid">
      <Header/>
      <Navbar/>
      <div className="container input-section">
        <Date/>
        <Class/>
        <div className="row mt-4">
          <Record/>
          <InputForm/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Input;