import React from "react";
import { useState, useEffect } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import Task from "./Tasks/Task";
import NoTasks from "./Tasks/NoTasks";
import FloatingPlus from "./FloatingPlus";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

export default function Tasks() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([
    { id: 1, task: "wake up", time: "07:30" },
    { id: 2, task: "do somthing 2", time: "07:30" },
    { id: 3, task: "Do somthing 3", time: "08:30" },
    { id: 4, task: "do somthing 4", time: "09:30" },
  ]);

  if (tasks.length === 0) return <NoTasks />;
  return (
    <div className={classes.root}>
      {tasks.map((t) => (
        <Task task={t} />
      ))}
      <FloatingPlus />
    </div>
  );
}
