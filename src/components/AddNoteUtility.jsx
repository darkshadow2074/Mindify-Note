import React,{useState} from 'react'
import { MdKeyboardArrowDown,MdKeyboardCapslock } from "react-icons/md"
import moment from "moment"
import Calendar from 'react-calendar'
import nextId from "react-id-generator";
import 'react-calendar/dist/Calendar.css';
const AddNoteUtility=({dateActive,setDateActive,dateState,setDateState,setDate,setMonth,setYear,title,note,setTitle,setNote,setNoteAdded,date,month,year,fullDate})=> {
  const [dateSelected,setDateSelected] = useState(false);
  const dateHandler = (e) =>{
    setDateState(e);
    setDate(e.getDate());
    setMonth(e.getMonth()+1);
    setYear(e.getFullYear());
    setDateActive(false);
    setDateSelected(true);
    
  }

  const addNote = () =>{
    
    setNoteAdded((notes)=> [...notes,{
      Id:nextId("Note"),
      Title : title,
      Note : note,
      FullDate : dateSelected===false?moment(new Date()).format("ddd MMM DD YYYY").toString():moment(fullDate).format("ddd MMM DD YYYY").toString(),
      noteDate : date,
      Month : month,
      Year : year,
      Delete: false,
    }])
    setNote("");
    setTitle("");
    setDateState(new Date());
    setDateSelected(false);
  }

  const clearNote = ()=>{
    setNote("");
    setTitle("");
    setDateState(new Date());
    setDateSelected(false);
  }
    return (
        <div className="utilityComponent">
          <div className="utility">
          <div className="backgroundColorUtility">
            <button className="color1"></button> 
            <button className="color2"></button> 
            <button className="color3"></button> 
            <button className="color4"></button> 
            <button className="color5"></button> 
            <button className="color6"></button> 
          </div>
          <button className="dateUtility" onClick={()=>setDateActive(!dateActive?true:false)}>Date <MdKeyboardArrowDown style={{verticalAlign: "middle",fontSize: "20px",}} /></button>
          <button className="clearUtility" onClick={clearNote}>Clear</button>
          <button className="addUtility" onClick={addNote}>Add</button>
        </div>
        
        {dateActive?<Calendar className="calendar" value={dateState} onChange={dateHandler} />:null}
        </div>
    )
}

export default AddNoteUtility
