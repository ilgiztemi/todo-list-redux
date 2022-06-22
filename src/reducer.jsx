import { nanoid } from "nanoid";
import * as actions from "./actions";
export const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD:
      return [
        ...state,
        { id: nanoid(), text: action.payload, completed: false }
      ];
    case actions.COMPLETE:
      return state.map((el) =>
        el.id === action.payload.id ? { ...el, completed: !el.completed } : el
      );
    case actions.DELETE:
      return state.filter((el) => el.id !== action.payload.id);
    case actions.UPDATE:
      return state.map((el) =>
        el.id === action.payload.id ? { ...el, text: action.payload.text } : el
      );
    default:
      return state;
  }
};
