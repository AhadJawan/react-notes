import React, { useState } from 'react'

export default function AddNote() {

    const [data, setData] = useState();

    return (
        <div className="form-group">
            <input className="form-control" type="text" placeholder="Type new note..."></input>
        </div>
    )
}
