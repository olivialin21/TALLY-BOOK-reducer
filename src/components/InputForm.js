import { NavLink } from 'react-router-dom';
import AddRecord from "../components/AddRecord"
import imgHome from '../images/icn_home.svg'

export default function InputForm() {
  return(
    <div className="col-5">
      <form id="form" className="inputForm">
        <input placeholder="item..."/>
        <input type="number" placeholder="money..."/>
        <AddRecord/>
      </form>
      <div className="inputForm-home">
        <img scr={imgHome} alt="imgHome" className="inputForm-imgHome"/>
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
      </div>
    </div>
  );
}