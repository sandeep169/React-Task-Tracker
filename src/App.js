import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Header from './component/Header';
import Tasks from './component/Tasks';
import AddTask from './component/AddTask';
// import Example from './Example';


import 'react-toastify/dist/ReactToastify.css';
import Footer from './component/Footer';
import About from './component/About';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    //return promise
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
    console.log(tasks);
  }, []);

  //fetch taks data 
  const fetchTasks = async () => {
    const res = fetch("http://localhost:5000/tasks");
    const data = (await res).json();
    // const data = await res.json();
    // console.log(data);
    return data;
  }
  //update reminder
  const fetchTask = async (id) => {
    const res = fetch(`http://localhost:5000/tasks/${id}`);
    const data = (await res).json();
    // const data = await res.json();
    // console.log(data);
    return data;
  }
  //add task
  const addTask = async (task) => {
    // console.log(task);
    if (!task) {
      return;
    } else {
      console.log(task);
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        //as we are adding data we need headers, to specify content-type
        //data we are sending which we are gonna wrap in json.stringfy which is going to turn it from javascript object to json stirng
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      //this is promise we have to make sure awit res.json
      const data = await res.json()
      setTasks([...tasks, data]);

      //creating i```````````d its own
      // const id = Math.floor(Math.random()* 1000) +1
      // console.log(id);  

      // const newTask ={id,...task }
      // setTasks([...tasks,newTask])

    }
  }

  //delete task
  const deleteTask = async (id) => {
    // console.log("delete",id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }


  //Toggle reminders
  const toggleRemainder = async (id) => {
    // console.log(id);
    const taskToToggle = await fetchTask(id)
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json();
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    // <>
    <Router>
      <Link to='/notification' style={{textDecoration:'none', color: "orange"}}>NotificationAppComponent</Link>
      <div className="container">
        {/* <Header ></Header> */}
        <Header title={"Task Tracker"} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}></Header>
        {/* <Header /> */}
        
        {/* <Example /> */}


        <Route path='/' exact render={(props) => (
          <>
          <h5>double click on task to remember</h5>
          {showAddTask && <AddTask onAdd={addTask} />}
            {/* //to check is there any task */}
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />) : "No Task To Show"}
         
           <footer> <Link to='/about' style={{textDecoration:'none'}}>About</Link> </footer>
          </> 
          
        )} />
        <Route path='/about' component={About} />
      </div>
      <Footer />
    </Router>

    // </>
  );
}

// class App extends React.Component{
// render(){
//   return <h1>
//     hello from a class
//   </h1>
// }
// }

export default App;
