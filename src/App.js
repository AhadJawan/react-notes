import React, { useState } from "react";
import "./bootstrap.min.css";

import AddNote from "./components/AddNote";
import Notes from "./components/Notes";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [state, setState] = useState({
    notes: [
      {
        id: uuidv4(),
        data: "The Earth is not flat"
      },
      {
        id: uuidv4(),
        data: "It's not round either"
      },
      {
        id: uuidv4(),
        data: "It's more like a donut"
      }
    ]
  });

  const addNote = data => {
    const newNote = {
      id: uuidv4(),
      data
    };
    // newNote.id = uuidv4(); //state.notes[state.notes.length].id + 1;
    setState({ notes: [...state.notes, newNote] });
  };

  const delNote = id => {
    setState({
      notes: [...state.notes.filter(note => note.id != id)]
    });
  };

  return (
    <div className="container" style={{ marginTop: "10vh" }}>
      <h1 style={titleStyle}>My Notes</h1>
      <Notes notes={state.notes} delNote={delNote} />
      <AddNote addNote={addNote} />
    </div>
  );
}

const titleStyle = {
  textAlign: "center",
  fontSize: "4rem"
};

export default App;
