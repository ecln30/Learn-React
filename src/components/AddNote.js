













import React, {useState} from 'react';
  

function AddNote({addNote}) {

    const [noteText, setNoteText] = useState('')
    const charLimit = 300
    const Change = e => {
        if(charLimit - e.target.value.length >= 0)
        setNoteText(e.target.value)
    }

    const Saveclick = f => {
        if(noteText.trim().length > 0) {
            addNote(noteText)
        }
        setNoteText(iem => item => '')
    }
    return ( 
        <div className="note new">
         <textarea cols="10" rows="8"
         placeholder='Type here'
         onChange={Change}
         value={noteText} ></textarea>
         <div className="onte-footer">
             <small>{charLimit - noteText.length}  Remaining  </small>
             <div className="save" onClick={ Saveclick}>Save</div>
         </div>

        </div>
     );
}

export default AddNote;








































