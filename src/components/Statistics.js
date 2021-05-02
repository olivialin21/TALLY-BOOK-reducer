import { CalSum } from "../functions";

export default function Statistics() {

  return(
    <div className="info">
      <div className="info-ratio pl-4 pr-4">
        收支比：{CalSum()[0]} / {CalSum()[1]}
      </div>
      <div className="info-bal pl-4 pr-4">
        本月：{CalSum()[0]-CalSum()[1]}
      </div>
    </div>
  );
}