import React from "react";
import Note from "./Note";
import { CSSTransition } from "react-transition-group";
import "./styles/Note.css";

export default function Notes(props) {
  return props.notes.map(note => {
    return (
      <CSSTransition className="note" timeout={200}>
        <Note note={note} delNote={props.delNote} />
      </CSSTransition>
    );
  });
}
