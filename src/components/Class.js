import imgClassB from '../images/class_b.png'

export default function Class() {
  return(
    <>
      <img className="classBtn-b" scr={imgClassB} alt="classBtn-b" />
      <div className="classes row d-flex justify-content-around">
        <div className="classItem">食</div>
        <div className="classItem">衣</div>
        <div className="classItem">住</div>
        <div className="classItem classItem-in">收</div>
        <div className="classItem">行</div>
        <div className="classItem">樂</div>
        <div className="classItem">其</div>
      </div>
    </>
  );
}