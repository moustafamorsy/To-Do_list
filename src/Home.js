import AddTask from './features/addtasks'

 const Home = () => {
    const style ={
     nav:{
       textAlign: 'center',
       backgroundColor:'black',
     
     },
     n:{
        margin:"0px",
        padding:"10px",
        color: "white",
     }

    }
  return (
    <>
    <nav style={style.nav}>
  <h1 style={style.n}>Your To Do List</h1>
    </nav>
    <AddTask />
    </>
  )
}

export default Home;