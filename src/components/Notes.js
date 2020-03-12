import React from "react";
import Note from "./Note";

export default function Notes(props) {
  return props.notes.map(note => {
    return <Note note={note} />;
  });
}