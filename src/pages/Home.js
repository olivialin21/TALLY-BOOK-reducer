// import { useContext } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Calendar from "../components/CalendarObj";
import Footer from "../components/Footer";
// import { StoreContext } from "../store";

function Home() {
  return (
    <div className="container-fluid">
      <Navbar/>
      <Header/>
      <Calendar/>
      <Footer/>
    </div>
  );
}

export default Home;
