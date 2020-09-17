import React from "react";
import { useState, useEffect } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import AddTask from "./AddTask";

export default function NoTasks() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Grid item>
        <img
          height="250"
          width="500"
          src="https://images.ctfassets.net/8j5aqoy0ts8s/3yPkstfPd9fvCglHhaKpa1/379fb68bee397c5b67b32887977a2ce9/spot-hero.png?w=1050&h=623&q=85&fm=webp"
        />
      </Grid>
      <Grid item>
        <Typography>Keep your personal tasks here,</Typography>
        <Typography>And we'll remind you in advance </Typography>
      </Grid>
      <Grid item>
        <Button
          onClick={handleOpen}
          variant="outlined"
          size="large"
          color="primary"
        >
          NEW TASK
        </Button>
        <AddTask open={open} onClose={handleClose} />
      </Grid>
    </Grid>
  );
}
