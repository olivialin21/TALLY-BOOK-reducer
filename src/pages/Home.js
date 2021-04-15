import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Calendar from "../components/CalendarObj";
import Footer from "../components/Footer";
import Statistics from "../components/Statistics";

function Home() {
  return (
    <div className="container-fluid">
      <Header/>
      <Navbar/>
      <Statistics/>
      <Calendar/>
      <Footer/>
    </div>
  );
}

export default Home;
