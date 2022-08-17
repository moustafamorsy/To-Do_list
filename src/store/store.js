import {configureStore} from '@reduxjs/toolkit'
import addTaskReducer from '../features/addTasks/addTaskSlice'

const store =configureStore({

reducer:{

addTask : addTaskReducer,

}

})


export default store;