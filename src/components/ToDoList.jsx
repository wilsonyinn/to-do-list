import "../styles.css";
import Task from "./Task.jsx";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  //dummy data
  const dummy = [
    {
      title: "Clean",
      description: "bathroom, kitchen, and living room by 8pm",
    },
    { title: "Groceries", description: "chicken, steak, lentils" },
    { title: "Take Out Trash", description: "thursdays" },
  ];

  const [tasks, setTasks] = useState(dummy);
  const [edit, setEdit] = useState(Array(tasks.length).fill(false));

  function addTask() {
    const newTasks = tasks.slice();
    console.log(newTasks);
    setTasks([...newTasks, { title: "", description: "" }]);
  }

  function editTask(i) {
    const newEdit = edit.slice();
    newEdit[i] = true;
    setEdit(newEdit);
  }

  function saveTask(i, task, description) {
    const newTasks = tasks.slice();
    newTasks[i].title = task;
    newTasks[i].description = description;
    const newEdit = edit.slice();
    newEdit[i] = false;
    setEdit(newEdit);
  }

  function deleteTask(i) {
    let newTasks = tasks.slice();
    let x = newTasks.splice(i, 1);
    console.log(x);
    console.log(i);
    console.log(newTasks);
    setTasks(newTasks);
  }

  const list = tasks.map((val, num) => {
    const { title, description } = val;
    return (
      <Task
        key={uuidv4()}
        title={title}
        description={description}
        editMode={edit[num]}
        handleEdit={() => editTask(num)}
        saveTask={saveTask}
        i={num}
        handleDelete={() => deleteTask(num)}
      />
    );
  });

  return (
    <div className="to-do-list-page">
      <h1>To Do List</h1>
      <button onClick={addTask}>Add Task</button>
      {list}
    </div>
  );
}

//add, edit, delete
