
import { createSlice} from '@reduxjs/toolkit'


const initialState ={
    mainData :[ 
      
      ],
   NewList: {id:'',
    Description:'',
    isDone: false,
    Status : '',
},
       
        filter : 'all',
    
}

const addTaskSlice= createSlice({

name: 'addtask',
initialState,
reducers:{

    adddata: (state) =>{
      
  state.mainData.push(state.NewList)
  state.NewList.id = `${state.mainData.length - 1}`

    },

addDescription :(state , action) =>{
    state.NewList.Description = action.payload;
   
},
isDone:(state , action) =>{
state.NewList.isDone = action.payload
},
filter:(state ,action) =>{
    state.mainData = action.payload
},
Delete:(state, action , naction) =>{
   state.mainData = state.mainData.filter((todo) =>
      todo.id !== action.payload)
      
   
},
Edit:(state, action) =>{
    // // state.mainData.Description =state.mainData.map((todo) =>{
    // //      if(todo.id === action.payload){
    // //        return state.mainData.Description = action.payload
    // //      }
    // })
},
Status:(state, action) =>{
    state.NewList.Status = action.payload
}



}


})

export default addTaskSlice.reducer

export const {addDescription , isDone ,filter , adddata , Delete, Status } = addTaskSlice.actions