import React from 'react'
import styled from 'styled-components'
const Note = (props) => {
    let timer=500,timeout;
  const formatDate=(value)=>{
    const date = new Date(value);
    const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    if(!value) return "";
    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    let year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    return `${hrs}:${min} ${amPm} ${day} ${month} ${year}`
  }
  const debounce=(func)=>{
    clearTimeout(timeout)
    timeout=setTimeout(func,timer)
  }
  const updateText=(text,id)=>{
    debounce(()=>props.updateText(text,id))
  }
  const updateTitle=(text,id)=>{
    debounce(()=>props.updateTitle(text,id))
  }
  return (
    <CardBody style={{background:`${props.note.color}`}}>
      <textarea style={{flex:'inherit',height:'30px'}} className='text_area' placeholder='Title' onChange={(e)=>updateTitle(e.target.value,props.note.id)} defaultValue={props.note.title} name="" id="" cols="30" rows="10"></textarea>
      <textarea placeholder='Notes.....' className='text_area' onChange={(e)=>updateText(e.target.value,props.note.id)} defaultValue={props.note.text} name="" id="" cols="30" rows="10"></textarea>
      <div className="d-flex justify-content-between">
          <small>{formatDate(props.note.time)}</small>
          <i role="button" onClick={()=>props.deleteNote(props.note.id)} className="bi bi-trash"></i>
      </div>
    </CardBody>
  )
}

export default Note;
const CardBody = styled.div`
  padding: 25px;
  height: 280px;
  display: flex;
  flex-direction: column;
  /* background:blueviolet; */
  border-radius: 30px;
  
  .text_area{
    flex: 1;
    resize: none;
    background:transparent;
    font-size: 1rem;
    line-height: 1.875;
    outline: none;
    border: none;
  }
`