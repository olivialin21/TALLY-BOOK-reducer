import imgClassB from '../images/class_b.png'
import imgClassW from '../images/class_w.png'

export default function Class() {
  return(
    <div className="container">
      <div className="classes row">
        <div className="classItem col">食</div>
        <div className="classItem col">衣</div>
        <div className="classItem col">住</div>
        <img className="classBtn-b col" scr={imgClassB} alt="classBtn-b" />
        <div className="classItem col">行</div>
        <div className="classItem col">樂</div>
        <div className="classItem col">其</div>
      </div>
    </div>
  );
}