import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p className="noteContent">{props.content}</p>
      <p className="time">{props.time}</p>
      <button
        onClick={() => {
          props.onCheck(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
