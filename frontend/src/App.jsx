import { useState } from 'react'

function App() {
  const [task,setTask] = useState("");
  const [todoList,setTodoList] = useState([]);
  

  function fun(event){
    setTask(event.target.value);
  }

  function addTask(){
    setTodoList([...todoList,{task : task,id : todoList.length+1}]);
    setTask("");
  }


  return (
    <>
      <h1>Todo List</h1>
    
      <input type="text" placeholder="Add a task" value={task} onChange={fun}></input>&nbsp;&nbsp;
      <button onClick={addTask}>Add Task</button>
      <hr></hr>

      <ul>
        {todoList.map((item)=>(
          <>
          <li><b>{item.task}</b> <button>Delete</button></li>
    
          </>
        ))}
      </ul>
      
    </>
  )
}

export default App
