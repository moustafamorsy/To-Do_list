import { configureStore } from '@reduxjs/toolkit'
import addTaskReducer from '../features/addTaskSlice'

const store = configureStore({
  reducer:{
    AddTask: addTaskReducer
  }
})

export default store