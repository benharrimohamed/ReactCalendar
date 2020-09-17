import React from "react";
import { useState, useEffect } from "react";
import Task from "./Task";
import NoTasks from "./NoTasks";
import { makeStyles } from "@material-ui/core";
import TaskCounter from "./TaskCounter";

export default function Tasks() {
  
  
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Waking up at morining very intersting !",
      time: "07:30",
      completed: false,
    },
    {
      id: 2,
      task: "Due to my contrubtion i wake up",
      time: "07:30",
      completed: false,
    },
    {
      id: 3,
      task: "Cook some good meal and try hard",
      time: "08:30",
      completed: false,
    },
  ]);

  const deleteTask = () => {
     
    console.log('hello')
  }

  const completedTask = (e) => {
    const id = e.target.id;
    tasks.map((item) => {
      if (item.id == id) item.completed = !item.completed;
    });

    console.log(tasks);
  };

  if (tasks.length === 0) return <NoTasks />;
  return (
    <div>
      <div>
        <TaskCounter
          color="primary"
          label="Tasks for today"
          counter={tasks.length}
        />
        {tasks.map((item) => (
          <Task key={item.id} task={item} completedTask={completedTask} handleDeleteTask={deleteTask}/>
        ))}
      </div>
      <div>
        <TaskCounter
          color="primary"
          label="Tasks for today"
          counter={tasks.length}
        />
        {tasks.map((item) => (
          <Task key={item.id} task={item} completedTask={completedTask} />
        ))}
      </div>
    </div>
  );
}
