import React , {useState} from 'react'
import AddNoteUtility from './AddNoteUtility';
import DisplayNote from './DisplayNote';
import {searchData} from "./SearchNote"
import "../App.css"
export let noteDatabase =[]
const AddNewNote = ({searchActive,defaultNote,dateObj,activateNote,setActivateNote,dateActive,setDateActive,dateState,setDateState,date,setDate,month,setMonth,year,setYear,title,setTitle,note,setNote,noteAdded,setNoteAdded}) => {
    noteDatabase=[
        {
            noteAdded:noteAdded,
            setNoteAdded:setNoteAdded,
            note:note,
            title:title,
        }
    ]
    return (
        <div>
            <div className="addNoteComponent">
            <h1 className="addNoteHeading">
                Add New Note
            </h1>
            <div className="noteBox">
               <div className="noteBoxContainer">
                  <input type="text" className="addTitle"  placeholder="Title" value={title} onFocus={()=>setActivateNote(true)} onChange={(e)=>{setTitle(e.target.value)}}/>
                  {
                      activateNote?<><textarea className="addNote" placeholder="Take a Note" value={note}  rows="5" cols="10" onChange={(e)=>setNote(e.target.value)} />  <AddNoteUtility dateActive={dateActive} setDateActive={setDateActive} dateState={dateState} setDateState={setDateState} setDate={setDate} setMonth={setMonth} setYear={setYear} title={title} note={note} setTitle={setTitle} setNote={setNote} setNoteAdded={setNoteAdded} date={date} month={month} year={year} fullDate={dateState}/></>:null 
                  }
               </div>
            </div>
           <DisplayNote defaultNote={defaultNote} dateObj={dateObj} activateNote={activateNote} setActivateNote={setActivateNote} dateActive={dateActive} setDateActive={setDateActive} dateState={dateState} setDateState={setDateState} date={date} setDate={setDate} month={month} setMonth={setMonth} year={year} setYear={setYear} title={title} setTitle={setTitle} note={note} setNote={setNote} noteAdded={searchActive?searchData:noteAdded} setNoteAdded={setNoteAdded}/>
        </div>
            </div>
    )
}

export default AddNewNote 
