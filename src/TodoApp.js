import React, { useState } from "react";

function TodoApp()  {
    // State to manage the task input value
    const [taskValue, SetTaskValue] = useState('');
    // State to manage the list of tasks
    const [tasks, setTasks] = useState([]);

    //Function to add a new task to the List
    const addTask = () => {
        const newTask = { id: Date.now(), task: taskValue, completed: false };
        setTasks([...tasks, newTask]);
        SetTaskValue('');
    }
    // Function to delete a task from the list
    const deleteTask = (taskId) => {
        const filtredTask = tasks.filter(task => task.id !== taskId);
        setTasks(filtredTask);
    }

    // Function to toggle the completion status of a task
    const toggleTaskCompletion = (taskId) => {
        const updatedTasks = tasks.map(task=> task.id === taskId ? {...task , completed :! task.completed} : task);
        setTasks(updatedTasks);
    };
    // Function to clear all tasks from the list
    const clearAllTasks = () => {
        setTasks([]);
    };

    // Function to count and alert the number of incomplete tasks
    const countIncompleteTasks = () =>{
        const incompleteTasksCount = tasks.filter(task => task.completed === false).length;
        alert(`Number of incomplete tasks: ${incompleteTasksCount}`);
    };

    // Function to sort tasks alphabetically
    const sortTasksAlphabetically = () => {
        const sortedTasks = [...tasks].sort((a, b) => a.task.localeCompare(b.task));
        setTasks(sortedTasks);
    };
    return (
        <div className="container mt-5">
          <h1 className="text-center mb-4">Todo App</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={taskValue}
              onChange={(e) => SetTaskValue(e.target.value)}
              placeholder="Enter task"
            />
            <button className="btn btn-primary" type="button" onClick={addTask}>Add Task</button>
          </div>
          <ul className="list-group">
            {tasks.map(task => (
              <li key={task.id} className={`list-group-item ${task.completed ? 'list-group-item-secondary' : ''}`}>
                <div className="d-flex justify-content-between align-items-center">
                  {task.task}
                  <div>
                    <button className="btn btn-success mx-1" onClick={() => toggleTaskCompletion(task.id)}>
                      {task.completed ? 'Uncomplete' : 'Complete'}
                    </button>
                    <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <button className="btn btn-secondary mx-1" onClick={sortTasksAlphabetically}>Sort Alphabetically</button>
            <button className="btn btn-info mx-1" onClick={countIncompleteTasks}>Count Incomplete Tasks</button>
            <button className="btn btn-danger mx-1" onClick={clearAllTasks}>Clear All Tasks</button>
          </div>
        </div>
    );
};

export default TodoApp;
