import React , {useState} from 'react';
import {useDispatch} from 'react-redux'
import {Delete} from '../addTasks/addTaskSlice'



 const Tasks = (props) => {
 const [open , setOpen] = useState(false)
 const [change , setChange] = useState("") 
  const dispatch = useDispatch()
  function handleClick(){
    setOpen(prevOpen => !prevOpen)
  }
  function handleChange(e){

    setChange(e.target.value)
  
  }
  return (
   
    <div style={{display: 'flex', alignItems: 'center',justifyContent: 'space-between',maxWidth:'600px',margin:'0 auto'}}>
<div  style={{display: 'flex',alignItems: 'center'}}>
    <p style={{}}>{props.Description}</p>
    <h5 style={{marginLeft:'25px'}}>{props.isDone === true ? "Complete" : "Active"}</h5>
</div>


<div  style={{display: 'flex', alignItems:'center'}}>
    <h6 style={{marginRight:'15px',cursor: 'pointer'}} onClick={handleClick}>Modify</h6>
   {open && <div>
      <input onChange={handleChange} value={change} placeholder='edit text'></input>
      <button onClick={handleClick}>Save</button>
    </div>}
    <h6 style={{cursor: 'pointer'}} onClick={() => dispatch(Delete(props.id))}>Delete</h6>
</div>

    </div>


  )
}


export default Tasks
