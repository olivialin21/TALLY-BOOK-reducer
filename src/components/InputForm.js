import imgHome from '../images/icn_home.svg'

export default function InputForm() {
  return(
    <div className="col-5">
      <form className="inputForm">
        <input placeholder="item..."/>
        <input type="number" placeholder="money..."/>
        <input className="inputForm-ok" type="submit" value="OK !"/>
      </form>
      <div className="inputForm-home">
        <img scr={imgHome} alt="imgHome" className="inputForm-imgHome"/>
        Home
      </div>
    </div>
  );
}