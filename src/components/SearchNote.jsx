import React from 'react'
import searchIcon from "./assets/images/search.png"
import { MdKeyboardArrowDown } from "react-icons/md";

import "../App.css"
export let searchData = [];
const SearchNote=({searchActive,setSearchActive,filterActive,setFilterActive,setFilterSelected,date,month,year,title,setTitle,note,setNote,noteAdded,setNoteAdded})=> {
    
    const searchHandler =(e) =>{
        
        let search = e.target.value;
         
        if(search.length>=1)
            { setSearchActive(true)
              searchData = noteAdded.filter(noteObj=> noteObj.Title.includes(search))
            }else{
                setSearchActive(false);
            }
    }    
    const filterHandler = () =>{
        setFilterActive(filterActive?false:true);
        setFilterSelected(false);
    }
    const compare_FullDate = (a,b)=>{
        if(a.FullDate<b.FullDate){
            return 1;
        }else if(a.FullDate>b.FullDate){
            return -1;
        }else{
            return 0;
        }
    }
    const compare_Month = (a,b)=>{
        if(a.Month<b.Month){
            return 1;
        }else if(a.Month>b.Month){
            return -1;
        }else{
            return 0;
        }
    }
    const compare_Date = (a,b)=>{
        if(a.noteDate<b.noteDate){
            return 1;
        }else if(a.noteDate>b.noteDate){
            return -1;
        }else{
            return 0;
        }
    }
    const compare_Year = (a,b)=>{
        if(a.Year<b.Year){
            return 1;
        }else if(a.Year>b.Year){
            return -1;
        }else{
            return 0;
        }
    }
    const newHandler = ()=>{
        setFilterSelected(true);
        setFilterActive(false);
        noteAdded.sort(compare_FullDate);
    }

    const monthHandler = ()=>{
       setFilterSelected(true);
       setFilterActive(false);
       noteAdded.sort(compare_Month);
    }
    const yearHandler = ()=>{
       setFilterSelected(true);
       setFilterActive(false);
       noteAdded.sort(compare_Year);

    }
    const dateHandler = ()=>{
        setFilterSelected(true);
        setFilterActive(false);
        noteAdded.sort(compare_Date);
    }
   
    return (
        <>
           <div className="searchComponent">
           <h1 className="Heading">MindiFy</h1>
           <div className="searchBar">
               <div className="search">
                  <img src={searchIcon} alt="search-icon" />
                  <input type="search" className="searchText" placeholder="Search Your Note" onChange={searchHandler} />
               </div>
               <div className="vertical"></div>
               <div className="filter">
                   <button className="filterButton" onClick={filterHandler}>Filter <MdKeyboardArrowDown style={{verticalAlign: "middle",fontSize: "24px",}}/></button>
                   <div className="filterOptions" style={{display:filterActive?"block":"none"}}>
                       <p onClick={newHandler}>New</p>
                       <p onClick={yearHandler}>Year</p>
                       <p onClick={monthHandler}>Month</p>
                       <p onClick={dateHandler}>Date</p>
                   </div>
               </div>
           </div>
        </div>

        <br className="breakLine"/>
        </>

    )
}

export default SearchNote
