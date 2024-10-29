import React from 'react';
import { Grid, TextField, Button } from '@mui/material';



function TaskForm({ newText, setNewText, handleCreate }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
      <Grid container spacing={0}>
        <Grid item xs={9}>
          <TextField
            label="Nouvel enregistrement"
            variant="outlined"
            fullWidth
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            margin="none"
            sx={{
              backgroundColor: 'white',
              '& .MuiOutlinedInput-root': {
                height: '100%',
              },
            }}

          />
        </Grid>
        <Grid item xs={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              height: '100%',
              fontWeight: 'bold',
              backgroundColor: '#4180b8',
            }}
          >
            Ajouter
          </Button>
        </Grid>
      </Grid>
      </form>
  );
}

export default TaskForm;
