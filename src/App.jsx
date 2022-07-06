import { useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./actions";

export default function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [item, setItem] = useState("");
  const data = useSelector((state) => state);
  const handleAdd = () => {
    if (!edit) {
      dispatch({
        type: actions.ADD,
        payload: input
      });
      setInput("");
    } else {
      dispatch({
        type: actions.UPDATE,
        payload: {
          id: item.id,
          text: input
        }
      });
      setInput("");
      setItem("");
      setEdit(false);
    }
  };
  const handleCompleted = (id) => {
    dispatch({
      type: actions.COMPLETE,
      payload: { id }
    });
  };
  const handleDelete = (id) => {
    dispatch({
      type: actions.DELETE,
      payload: { id }
    });
  };
  const handleEdit = (el) => {
    setEdit(true);
    setInput(el.text);
    setItem(el);
  };
  console.log(data);
  return (
    <div className="App">
      <h1>TODO-LIST</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button className="btn" onClick={handleAdd}>
        Add
      </button>
      <div className="main">
        {data.map((el) => {
          return (
            <div className="item">
              <span className={el.completed ? "line" : ""}>{el.text}</span>
              <button className="btns" onClick={() => handleCompleted(el.id)}>
                completed
              </button>
              <button className="btns" onClick={() => handleEdit(el)}>
                edit
              </button>
              <button className="btns" onClick={() => handleDelete(el.id)}>
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
