import React from 'react'
import Note from './Note'
import styled from 'styled-components'
import cover from './cover.png';
const NotesList = (props) => {
  const reverseArray=(arr)=>{
    const array=[];
    for(let i=arr.length-1;i>=0;--i){
      array.push(arr[i]);
    }
    return array;
  }
  const notes=reverseArray(props.notes);
  return (
    <NotesBody>
      {
        notes.length>0?notes.filter(title => title.title.toLowerCase().includes(props.Search)).map((id,key)=>{
          return(<Note updateText={props.updateText} updateTitle={props.updateTitle} deleteNote={props.deleteNote} key={id.id} note={id}/>)
        }):<h3 className='d-flex flex-column justify-content-center align-content-center'>
          <img src={cover} height='100px' width='100px' style={{margin:'0px auto'}} alt="notes app" title='notes app'/>
          No notes present
          <h6>Click + to start.</h6>
          </h3>
      }
    </NotesBody>
  )
}

export default NotesList;
const NotesBody = styled.div`
height: 90%;
display: flex;
flex-wrap: wrap;
gap: 30px;
overflow: scroll;
margin: 20px;
justify-content: center;
@media screen and (max-width:940px){
  justify-content: center;
}
`