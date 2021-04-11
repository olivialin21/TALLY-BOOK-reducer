import imgClassB from '../images/class_b.png'
import imgClassW from '../images/class_w.png'

export default function Class() {
  return(
    <div className="container">
      <div className="classes row d-flex justify-content-around">
        <div className="classItem">食</div>
        <div className="classItem">衣</div>
        <div className="classItem">住</div>
        <img className="classBtn-b" scr={imgClassB} alt="classBtn-b" />
        <div className="classItem">行</div>
        <div className="classItem">樂</div>
        <div className="classItem">其</div>
      </div>
    </div>
  );
}