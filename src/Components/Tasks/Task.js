import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "50%",
    margin: 5,
  },
  title: {
    fontSize: 20,
    justifyContent: "flex-start",
  },
  content: {
    display: "flex",
    flexDirection: "row",
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
        <Typography className={classes.title}>{props.t.task}</Typography>
        <Typography className={classes.time}>{props.t.time}</Typography>
      </CardContent>
    </Card>
  );
}
