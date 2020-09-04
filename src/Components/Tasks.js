import React from "react";
import { useState, useEffect } from "react";
import Task from "./Tasks/Task";
import NoTasks from "./Tasks/NoTasks";
import { makeStyles } from "@material-ui/core/styles";
import TaskCounter from "./Tasks/TaskCounter";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    left: "0",
    right: "0",
  },
  task: {
    display: "flex",
    flexDirection: "column",
  },
});

export default function Tasks() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([
    { id: 1, task: "do somthing 2", time: "07:30", completed: false },
    { id: 2, task: "do somthing 2", time: "07:30", completed: false },
    { id: 3, task: "Do somthing 3", time: "08:30", completed: false },
    { id: 4, task: "do somthing 4", time: "09:30", completed: true },
  ]);

  if (tasks.length === 0) return <NoTasks />;
  return (
    <div className={classes.root}>
      <div className={classes.task}>
        <TaskCounter
          color="primary"
          label="Tasks for today"
          counter={tasks.length}
        />
        {tasks.map((t) =>
          !t.completed ? <Task key={t.id} task={t} checkTask={checkTask} /> : ""
        )}
      </div>
      <div className={classes.task}>
        <TaskCounter color="default" label="Completed" counter="2" />
        {tasks.map((t) => (t.completed ? <Task key={t.id} task={t} /> : ""))}
      </div>
    </div>
  );
}
