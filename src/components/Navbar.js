import { NavLink } from 'react-router-dom';

export default function NavBar({isOnTouch}) {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    console.log("open");
  };
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    console.log("close");
  }
  return (
    <>
      <div id="mySidenav" class="sidenav">
        <div className="closeBtn" onClick={closeNav}>
          &times;
        </div>
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/setting" className="nav-item">
          Setting
        </NavLink>
        <NavLink to="/feedback" className="nav-item">
          Feedback
        </NavLink>
      </div>

      <span className="hamBtn" onClick={openNav}>&#9776;</span>
    </>
  );
}