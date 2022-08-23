import React, {useState} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { addTasks } from './addTaskSlice'

import Task from '../tasks'
 const AddTasks = () => {
 
  const dispatch = useDispatch()
  const [filter , setFilter] = useState("All")

 const Data = useSelector((state) => {
  if (filter === "Complete") {
    return state.AddTask.Data.filter((el) => el.isDone === true);
  }
  if (filter === "Active") {
    return state.AddTask.Data.filter((el) => el.isDone === false);
  }
  return state.AddTask.Data;
});

const printList = Data.map((task) => <Task key={task.id} {...task} />)
console.log(Data);
const [text , setText] = useState("")
const [open , setOpen] = useState(false)

function addTask(){
  setOpen(prevOpen => !prevOpen)
}
function handleChange(e){
e.preventDefault()
setText(e.target.value)
}
function handleclick(e){
  e.preventDefault();

  if (text.length > 0) {
    dispatch(addTasks(text));
    setText("");
  }
  setOpen(false)
 }

 function handlefilter(e){
  setFilter(e.target.value)
 }
 

  return (

   <div style={{maxWidth:"600px",margin:"0 auto",marginTop:"50px",position:"relative"}}>
   
   <div style={{display:"flex",justifyContent:"space-around"}} >
    
        <select
        id="filter"
        value={filter}
        onChange={handlefilter}
        name="filter"
        >
    <option value="All">All</option>
     <option value= "Complete">Complete</option>
    <option value= "Active" >Active</option>
     </select>
             <div onClick={addTask}>  <button >addTask</button> </div>
          
        </div>
      { open &&  <form style={{position:'absolute',left:"33%", backgroundColor:'red',padding:'15px',width:'200px',textAlign:"center"}}>
        <input onChange={handleChange} value={text}  size="20" placeholder="Enter task"></input>
        <button onClick={handleclick}>Add</button>
      </form>}
        
           {printList}
           
          
   
   </div>
  )
}


export default AddTasks