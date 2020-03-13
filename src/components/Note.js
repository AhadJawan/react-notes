import React from "react";

export default function Note(props) {
  return (
    <div className="card" style={cardStyle}>
      <div className="card-body">
          {/* <h4 className="card-title">Note Title</h4> */}
          <p className="card-text">{props.note.data}</p>
      </div>
    </div>
  );
}


const cardStyle = {
    margin: '4px',
    background: 'repeating-linear-gradient(#FFFFF8, #FFFFF8 10px, #BCBAFF 10px, #BCBAFF 12px)',
    padding: '10px'
}