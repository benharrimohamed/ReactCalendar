import React , {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



export default function AddTask(props) {


    const [state, setState] = useState ({task : {undefined} , time : {undefined} })

    const handleTaskChange = (e) => {

        setState((prevState) => ({
            ...prevState , 
            task : e.target.value
        })
        )
    }

    const handleTimeChange = (e) => {

        setState((prevState) => ({
            ...prevState , 
            time : e.target.value
        })
        )
    }


    const addTask = () => {

         console.log(state.task)
         console.log(state.time)
    }
  
  return (
      <Dialog open={props.open} onClose={props.onClose}>
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Task
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tast Description"
            type="email"
            onChange={handleTaskChange}
            value={state.task}
            fullWidth
          />
          <TextField
            id="time"
            label="Set notification"
            type="time"
            onChange={handleTimeChange}
            value={state.time}
            fullWidth
            InputLabelProps={{
            shrink: true,
            }}
           />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button  onClick={addTask} variant="contained" color="primary">
            Add task
          </Button>
        </DialogActions>
      </Dialog>
  );
}
