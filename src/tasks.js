import React from 'react'
import {useDispatch} from 'react-redux'
import { Delete , modify ,setStatus  } from './features/addTaskSlice'

 const Tasks = (props) => {

const { id , Description  } = props
const [checked, setChecked] = React.useState(props.isDone)
  const dispatch = useDispatch()
  const [open ,setOpen] = React.useState(false)
  const [modifyy , setModifyy] = React.useState(props.Description)

function handleChange(e){


  setModifyy(e.target.value)
 }
 function handleModify(){
  setOpen(false)
  dispatch(modify({id , modifyy}))

 }
 const statusHanlder = () => {
  setChecked(prevCheck => !prevCheck)
  dispatch(setStatus({ id, checked }));
};

  return (

    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <div style={{display: 'flex',alignItems:"baseline",}}>

      <input   
      type="checkbox" 
              checked={props.isDone}
              onChange={statusHanlder}  />

      <h3 style={{ paddingLeft:"5px"}}>{Description}</h3>

      </div>
  
 <div style={{display: 'flex',alignItems:"baseline",}}>

     
<h5 style={{cursor: 'pointer'}} onClick={ () => setOpen((prev) => !prev ) }>modify</h5>
 {open &&<div>
  <input style={{marginLeft:"5px"}} onChange={handleChange}  type="text" value={modifyy} placeholder="Enter task"></input>
   <button style={{marginLeft:"5px"}} onClick={handleModify}> Save </button>
 </div>}
  <h5 style={{cursor: 'pointer' ,paddingLeft:"5px"}} onClick={() => dispatch(Delete(props.id))}>Delete</h5>
      </div>

      
     
    
      
      
      </div>
  )
}

export default Tasks