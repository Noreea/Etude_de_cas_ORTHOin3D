import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4180b8',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function EditDialog({ openDialog, handleDialogClose, editRecord, handleEditInputChange, handleDialogSave }) {
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <Box display="flex" justifyContent="space-between" alignItems="center" padding="8px 24px 0 24px">
          <DialogTitle>Modifier l'enregistrement</DialogTitle>
          <IconButton aria-label="close" onClick={handleDialogClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="normal"
            label="Texte"
            type="text"
            fullWidth
            variant="outlined"
            value={editRecord ? editRecord.text : ''}
            onChange={handleEditInputChange}
            placeholder="Entrez le texte à modifier"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary" variant="outlined">
            Annuler
          </Button>
          <Button onClick={handleDialogSave} color="primary" variant="contained">
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default EditDialog;
