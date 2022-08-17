import React, { useState } from 'react';
import {useSelector , useDispatch} from 'react-redux'
import {addDescription , isDone , filter , adddata , Status } from './addTaskSlice'

function AddTask() {
  const Description = useSelector((state) => state.addTask.NewList.Description)
  const Done = useSelector((state) => state.addTask.NewList.isDone)

  const dispatch = useDispatch()

    const style={
        
       container:{display: 'flex', justifyContent: 'space-around',maxWidh:'500px',margin:'0 auto',marginTop:'50px'}
       
    }

  
    const [open , setOpen] = useState(false)

    const [check , setCheck] = useState(false)
    const [ donee , setDonee] = useState("")

    function handleOpen(){
      setOpen(prevOpen => !prevOpen)
    }

    function handlechange(e){
      e.preventDefault()
      dispatch(addDescription(e.target.value))
    }
    
    function handleCheck(){
    setCheck(prevCheck => !prevCheck)

    dispatch(isDone(check))
  dispatch(Status(check === false ? "Active":"Complete"))
    }
    function handleDone(e){
      setDonee(e.target.value)
      dispatch(filter(donee))
    }


  return (
 
  
    <div style={style.container}>
        <div >
        <select
         id="donee"
         value={donee}
         onChange={handleDone}
         name="donee"
        >
    <option value="All">All</option>
     <option value="Complete">Complete</option>
    <option value="Active">Active</option>
     </select>

        </div>

        <div >
            <button onClick={handleOpen}>{open === false ?"addTask": "closeTask"}</button>
          
        </div>

      {open && <form style={{position:'absolute', backgroundColor:'red',padding:'25px',width:'350px'}}>
        <input onChange={handlechange} value={Description}  size="30" placeholder="Enter task"></input>

        <input onChange={handleCheck} type="checkbox" checked={Done} name="Done" />
        <label htmlFor="Done" style={{paddingRight:'10px'}} >isDone</label>
        <button  type="button" onClick={() => dispatch(adddata())} >Add</button>
      </form>}


    </div>

  )

}

export default AddTask;
