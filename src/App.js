import "./App.css";
import { Task } from "./Task";
import { useState } from "react";

function App() {
  const [todoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const grabChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setToDoList([...todoList, task]);
  };
  const deleteTask = (id) => {
    setToDoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={grabChange} className="field" />
        <button onClick={addTask} className="btn">
          Add Task
        </button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

//
//   const [todoList, setToDoList] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const grabChange = (e) => {
//     setNewTask(e.target.value);
//   };
//   const addTask = () => {
//     const task = {
//       id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//       taskName: newTask,
//     };
//     setToDoList([...todoList, task]);
//   };
//   const deleteTask = (id) => {
//     setToDoList(todoList.filter((task) => task.id !== id));
//   };

//   <div className="addTask">
//   <input onChange={grabChange} />
//   <button onClick={addTask}>Add Task</button>
// </div>
// <div className="list">
//   {todoList.map((task) => {
//     return (
//       <div>
//         <h2>{task.taskName}</h2>
//         <button onClick={() => deleteTask(task.id)}>X</button>
//       </div>
//     );
//   })}
// </div>
// <div className="addTask">
//   <input onChange={handleChange} />
//   <button onClick={addTask}>Add Task</button>
// </div>
// <div className="list">
//   {todoList.map((task) => {
//     return <h1>{task}</h1>;
//   })}
// </div>
