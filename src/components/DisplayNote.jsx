import React from 'react'
import DisplayNoteUtility from './DisplayNoteUtility';
function DisplayNote({activateNote,setActivateNote,setTitle,setNote,noteAdded,setNoteAdded}) {
    return (
        <div className="displayNote">
        <h1 className="displayHeading">Your Note's</h1>
         <div className="noteContainer">
         {
           noteAdded.map(({Id,Title,Note,FullDate},index)=>{
               return(
                 <div className="displayNoteBox" key={Id}>
                    <div className="displayNoteBoxContainer">
                       <input type="text" className="addTitle"  placeholder="Title" value={Title}  onInput={(e)=>{setTitle(e.target.value)}}/>
                       {
                        <><textarea className="addNote" placeholder="Take a Note"  value={Note} rows="5" cols="10" onChange={(e)=>setNote(e.target.value)} /> <DisplayNoteUtility setActivateNote={setActivateNote} Id={Id} title={Title} note={Note} setTitle={setTitle} setNote={setNote} setNoteAdded={setNoteAdded} noteAdded={noteAdded} activateNote={activateNote} /> </>
                       }
                    </div>
                    <h1>{FullDate}</h1>
                </div>
               )
           })
        }
         </div>
    </div>
    )
}

export default DisplayNote
