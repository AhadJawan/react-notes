import React, { useState } from "react";
import "./bootstrap.min.css";

import AddNote from "./components/AddNote";
import Note from "./components/Note";
import Notes from "./components/Notes";

// import uuid from "uuid";

function App() {
  const [state, setState] = useState({
    notes: [
      {
        id: 1,
        data: "The Earth is not flat"
      }, 
      {
        id: 2,
        data: "It's not round either"
      },
      {
        id: 3,
        data: "It's more like a donut"
      }
    ]
  });

  return (
    <div className="container" style={{ marginTop: "10vh" }}>
      <h1 style={titleStyle}>My Notes</h1>
      <div className="d-flex" style={noteContainerStyle}>
        <Notes notes={state.notes} />
      </div>
      <AddNote />
    </div>
  );
}

const titleStyle = {
  textAlign: "center",
  fontSize: "4rem"
};

const noteContainerStyle = {
  margin: "15px"
};

export default App;
