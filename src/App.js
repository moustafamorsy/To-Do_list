
import './App.css';
import AddTask from './features/addTasks/addTask';
// import { Routes, Route} from "react-router-dom";
import Home from './Home';
import Tasks from "./features/taskss/tasks";
import {useSelector} from 'react-redux'



function App() {
  const Data = useSelector((state) => state.addTask.mainData)
  

const  printList= Data.map( list =>  <Tasks key={list.id} {...list} /> )


  return (

    <div>

 <Home />
 
 <AddTask />
{printList}
    </div>
  
  

  );
}

export default App;
