import React from "react";
import "./bootstrap.min.css";

import AddNote from "./components/AddNote";
import Note from "./components/Note";

function App() {
  return (
    <div className="container" style={{marginTop: '10vh'}}>
      <h1 style={titleStyle}>My Notes</h1>
      <h3>TODO Notes</h3>
      <div className="d-flex" style={noteContainerStyle}>
        <Note />
      </div>
      <AddNote />
    </div>
  );
}

const titleStyle = {
  textAlign: 'center',
  fontSize: '4rem'
}

const noteContainerStyle = {
  margin: '15px'
}

export default App;
