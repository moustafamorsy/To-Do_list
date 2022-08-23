import { createSlice } from '@reduxjs/toolkit'
import { v4 } from "uuid";
const initialState = {
    Data:[
     
    ],
 
}

export const addTaskSlice = createSlice({
  name: 'addTask',
  initialState,
  reducers: {
    addTasks: (state , action) => {
        let todo ={ id : v4() , Description: action.payload , isDone: false }

        state.Data.push(todo)
    
      },
      Delete: (state , action) => {
      state.Data =  state.Data.filter(todo => todo.id !== action.payload)
    
    },
    modify: (state , action) => {
        state.Data.map((todo) =>{
                 if(todo.id === action.payload.id){
                   return todo.Description = action.payload.modifyy
                 }
                 return todo;
            })

    }, setStatus: (state, action) => {
      state.Data = state.Data.map((el) =>
        el.id === action.payload.id ? { ...el, isDone: !action.payload.checked } : el
      );
    },
}
})


export const {addTasks , Delete , modify, setStatus} = addTaskSlice.actions

export default addTaskSlice.reducer