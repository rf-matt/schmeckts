import "./Img.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Img(props) {
  const [count, setCount] = useState(2);
  const transformedChildren = props.children.map((imagen) => {
    return (
      <ul>
        <li> {imagen} </li>
      </ul>
    );
  });

  return (
    <div className="contBtn">
      <button
        id="btnAdd"
        class="btn btn-outline-primary"
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>
      <button
        id="btnDel"
        class="btn btn-outline-danger"
        onClick={() => setCount(count - 1)}
      >
        Delete
      </button>
      {transformedChildren.slice(0, count)}
    </div>
  );
}
