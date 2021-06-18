import React,{useState} from 'react'
import { MdKeyboardArrowDown,MdKeyboardCapslock, MdNoteAdd } from "react-icons/md";
import nextId from "react-id-generator";  
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const DisplayNoteUtility=({setActivateNote,Id,title,note,setTitle,setNote,setNoteAdded,noteAdded,activateNote})=> {

  const deleteNote = ()=>{
    setNoteAdded(noteAdded.filter((note)=>Id!==note.Id));
  }
  const editNote = () =>{
     setActivateNote(true);
     setTitle(title);
     setNote(note);
     setNoteAdded(noteAdded.filter((note)=>Id!==note.Id));
  }
      return (
          <div className="utilityComponent">
            <div className="utility">
            <button className="clearUtility" onClick={deleteNote}>Delete</button>
            <button className="addUtility" onClick={editNote}>Edit</button>
          </div>
          
        
          </div>
      )
}

export default DisplayNoteUtility
