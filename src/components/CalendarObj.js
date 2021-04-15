import React, { useEffect, useState, useContext } from 'react';
import { StoreContext } from "../store"
import { setDate } from "../actions";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarObj() {
  const [ value, onChange] = useState(new Date());
  const { dispatch } = useContext(StoreContext);

  useEffect(()=>{
    localStorage.setItem("date", value);
  }, [value])

  return (
    <div className="calendar">
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={value => {
          window.location.href="/input";
          console.log(value);
          setDate(dispatch, value);
        }}
      />
    </div>
  );
}
