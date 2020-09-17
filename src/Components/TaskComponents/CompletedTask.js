import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: "50%",
    maxWidth: "50%",
    margin: 5,
  },
  title: {
    fontSize: 20,
    justifyContent: "flex-start",
  },
  content: {
    display: "block",
    flexDirection: "column",
  },
  time: {
    fontSize: 14,
    justifyContent: "flex-end",
    alignSelf: "right",
  },
});

export default function Task(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography className={classes.title}>{props.task.task}</Typography>
        <Typography className={classes.time}>{props.task.time}</Typography>
      </CardContent>
    </Card>
  );
}
