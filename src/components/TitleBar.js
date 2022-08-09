import {useState} from 'react'
import styled from 'styled-components'

const TitleBar = (props) => {
    const [showSearchBar, setshowSearchBar] = useState(false);
  return (
    <Title>
        <div  className='titlebar d-flex justify-content-between p-2 bd-highlight bg-warning bg-gradient fs-4 fw-light' >Notes App
        <div className="">
          <button title='search notes' onClick={()=>setshowSearchBar(true)} 
          className={showSearchBar?'d-none':'btn btn-outline  me-1'}
          type="button" id="button-addon2"><i className="bi bi-search" ></i></button>
          <button title='add notes' onClick={()=>props.addNote()} 
          className='btn btn-outline me-2'
          type="button" id="button-addon2"><i className="bi bi-plus-lg" ></i></button>
          </div>
        </div>
        <div className={showSearchBar?'input-group mb-3 p-2':'d-none'} >
            <input type="search" className="form-control" onChange={(e)=>{props.setSearch(e.target.value)}} placeholder="Search By Title..." aria-label="Search By Title..." aria-describedby="button-addon2"/>
            <button title='close search' onClick={()=>{props.setSearch(''); setshowSearchBar(false); }} className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-x"></i></button>
        </div>
      </Title>  
    
  )
}

export default TitleBar;
const Title = styled.div`
transition: all 1s;
  .bi{
    font-weight: 800 !important;
    font-size: 20px;
  }
.titlebar{
  font-family: "McLaren", cursive !important;
  color: white;
  padding-left: 25px !important;
  font-size: 1.5em !important;
  transition: 1s;
  
}
`
