import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckBox from "@material-ui/core/CheckBox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import AccordionActions from "@material-ui/core/AccordionActions";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

const useStyles = makeStyles({
  root: {
    margin: 5,
  },
  title: {
    fontSize: 20,
  },
  time: {
    fontSize: 14,
  },
});

export default function Task(props) {
  const classes = useStyles();
  const { id, task, completed , handleDeleteTask } = props.task;
  const CustomCheckBox = (
    <CheckBox
      icon={<CircleUnchecked />}
      checkedIcon={<CircleCheckedFilled />}
      color="primary"
      onChange={props.completedTask}
      id={id}
    />
  );
  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
      >
        <FormControlLabel control={CustomCheckBox} label={task} />
      </AccordionSummary>
      <Divider />
      <AccordionActions>
        <IconButton color="primary" component="span">
          <Edit />
        </IconButton>
        <IconButton color="primary" component="span">
          <DeleteIcon onClick={handleDeleteTask}/>
        </IconButton>
      </AccordionActions>
    </Accordion>
  );
}
