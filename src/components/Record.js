import { useEffect, useContext } from "react";
import { CalSumDay } from '../functions';
import { StoreContext } from "../store"
import { removeRecord } from "../actions";

export default function Record() {
  const { state: { record }, dispatch } = useContext(StoreContext);

  useEffect(() => {
    localStorage.setItem("record", JSON.stringify(record));
 }, [record])

  return(
    <div className="col-md-5 col-sm-12 record">
      <div className="record-block">
        <table className="record-table">
          <thead>
            <tr>
              <th scope="col">items</th>
              <th scope="col" className="record-table-r">balance</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {record.map(info =>{
              if (info.date===localStorage.getItem("date")){
                return(
                <tr>
                  <td>{info.ps}</td>
                  { (info.aClass==="in") ? <td className="record-table-r">{info.cost}</td> :
                    <td className="record-table-r">-{info.cost}</td>
                  }
                  <td className="record-x" onClick={() => removeRecord(dispatch, info)}>
                    x
                  </td>
                  <td></td>
                </tr>
                )
              }
            })}
          </tbody>
          <tfoot>
            <td>Total</td>
            <td className="record-table-r">{CalSumDay()[0]-CalSumDay()[1]}</td>
            <td></td>
          </tfoot>
        </table>
      </div>
    </div>
  );
}