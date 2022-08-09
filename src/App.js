import {useState,useEffect} from 'react'
import './App.css';
import TitleBar from './components/TitleBar';
import NotesList from './components/NotesList';

function App() {
  const [notes, setnotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );
  const [Search, setSearch] = useState('');
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];



  const addNote=()=>{
    const tempNote=[...notes];
    tempNote.push({
      id:Date.now()+""+Math.floor(Math.random()*78),
      text:"",
      title:"",
      color:colors[Math.floor(Math.random() * colors.length)],
      time:Date.now()
    });
    setnotes(tempNote);
  }
  const deleteNote=(id)=>{
    const tempNote=[...notes];
    const index=tempNote.findIndex(item=>item.id===id)
    if(index<0) return;
    tempNote.splice(index,1);
    setnotes(tempNote);
  }
  const updateText=(text,id)=>{
    const tempNote=[...notes];
    const index=tempNote.findIndex(item=>item.id===id)
    if(index<0) return;
    tempNote[index].text = text;
    setnotes(tempNote);
  }
  const updateTitle=(title,id)=>{
    const tempNote=[...notes];
    const index=tempNote.findIndex(item=>item.id===id)
    if(index<0) return;
    tempNote[index].title = title;
    setnotes(tempNote);
  }
  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="App">
      <TitleBar addNote={addNote} setSearch={setSearch} />
      <NotesList Search={Search} updateTitle={updateTitle} updateText={updateText} deleteNote={deleteNote} notes={notes}/>
      <footer>
      <p>Copyright @ {new Date().getFullYear()} by Mohd Riyan</p>
    </footer>
    </div>
  );
}

export default App;
