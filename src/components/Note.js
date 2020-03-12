import React from "react";

export default function Note(props) {
  return (
    <div className="card bg-light" style={{margin: '4px'}}>
      <div className="card-body">
          {/* <h4 className="card-title">Note Title</h4> */}
          <p className="card-text">{props.note.data}</p>
      </div>
    </div>
  );
}
