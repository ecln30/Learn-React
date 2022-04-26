













import React from 'react';
import Note from './Note'
import AddNote from './AddNote'


function NoteList({notes, addNote, Delete}) {
    return ( 
        <div className="notes-list">
          {notes.map(note => 
            <Note 
            id={note.id}
            text={note.text}
            date={note.date}
            Delete={Delete} />
            )}
          <AddNote addNote={addNote} />
        </div>
     );
}

export default NoteList;































