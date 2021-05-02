import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
import {
  SET_DATE,
  CHOOSE_CLASS,
  ADD_RECORD,
  REMOVE_RECORD
} from "../utils";

export const StoreContext = createContext();
let record = localStorage.getItem("record")
  ? JSON.parse(localStorage.getItem("record"))
  : [];

const initialState = {
  date: new Date(),
  aClass: "",
  record
};

function reducer(state, action) {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case CHOOSE_CLASS:
      return {
        ...state,
        aClass: action.payload,
      };
    case ADD_RECORD:
      const info = action.payload;
      record = [...state.record, info];
      return { ...state, record };
    case REMOVE_RECORD:
      record = state.record.filter((x) => x !== action.payload);
      return { ...state, record };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    "example"
  );
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}