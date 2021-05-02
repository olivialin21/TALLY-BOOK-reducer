import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { StoreContext } from "../store"
import { setDate } from "../actions";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarObj() {
  const [ value, onChange] = useState(new Date());
  const { dispatch } = useContext(StoreContext);

  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/input`; 
    history.push(path);
  }

  return (
    <div className="calendar">
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={value => {
          setDate(dispatch, value);
          localStorage.setItem("date", value);
          routeChange();
        }}
        to="/input"
      />
    </div>
  );
}
