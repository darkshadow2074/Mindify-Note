import React , {useState} from "react"
import SearchNote from "./components/SearchNote.jsx"
import AddNewNote from "./components/AddNewNote.jsx"
import nextId from "react-id-generator";
import './App.css';

function App() {
  const defaultNote = {
    Id:nextId("Default"),
    Title: "Welcome to Mindify",
    Note : "This is a sample note, please feel free to edit or delete this note and Get started with creating your own notes!",
    FullDate : `Thu Jun 17 2021 `,
    noteDate : null,
    Month : null,
    Year : null,
    Delete:false,
}
const dateObj=new Date();
const [activateNote,setActivateNote] = useState(false);
const [dateActive,setDateActive] = useState(false);
const [dateState,setDateState] = useState(dateObj);
const [date,setDate] = useState(dateObj.getDate());
const [month,setMonth] = useState(dateObj.getMonth()+1);
const [year,setYear] = useState(dateObj.getFullYear());
const [title,setTitle] = useState("");
const [note,setNote] = useState("");
const [searchActive,setSearchActive] = useState(false);
const [noteAdded,setNoteAdded] = useState([defaultNote]);
const [filterActive,setFilterActive] = useState(false)
const [filterSelected,setFilterSelected] = useState(false);
console.log(filterSelected);
  return (
    <div className="App">
        <SearchNote searchActive={searchActive} setSearchActive={setSearchActive} filterActive={filterActive} setFilterActive={setFilterActive} setFilterSelected={setFilterSelected} defaultNote={defaultNote} dateObj={dateObj} activateNote={activateNote} setActivateNote={setActivateNote} dateActive={dateActive} setDateActive={setDateActive} dateState={dateState} setDateState={setDateState} date={date} setDate={setDate} month={month} setMonth={setMonth} year={year} setYear={setYear} title={title} setTitle={setTitle} note={note} setNote={setNote} noteAdded={noteAdded} setNoteAdded={setNoteAdded} /> 
        <AddNewNote searchActive={searchActive} defaultNote={defaultNote} dateObj={dateObj} activateNote={activateNote} setActivateNote={setActivateNote} dateActive={dateActive} setDateActive={setDateActive} dateState={dateState} setDateState={setDateState} date={date} setDate={setDate} month={month} setMonth={setMonth} year={year} setYear={setYear} title={title} setTitle={setTitle} note={note} setNote={setNote} noteAdded={noteAdded} setNoteAdded={setNoteAdded}/>
    </div>
  );
}

export default App;
