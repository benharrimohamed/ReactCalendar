import React from "react";
import { useState, useEffect } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import Task from "./Tasks/Task";
import NoTasks from "./Tasks/NoTasks";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "wake up", time: "07:30" },
    { id: 2, task: "do somthing 2", time: "07:30" },
    { id: 3, task: "Do somthing 3", time: "08:30" },
    { id: 4, task: "do somthing 4", time: "09:30" },
  ]);

  return tasks.length === 0 ? <NoTasks /> : tasks.map((t) => <Task task={t} />);
}
