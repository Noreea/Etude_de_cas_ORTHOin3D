
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


import AppTitle from './components/AppTitle';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import EditDialog from './components/EditDialog';
import NotificationSnackbar from './components/NotificationSnackbar';

const theme = createTheme({
  palette: {
    background: {
      default: '#ddf2f9',
    },
  },
});

function App() {
  const [records, setRecords] = useState([]);
  const [newText, setNewText] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [editRecord, setEditRecord] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/records/');
      setRecords(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des enregistrements :', error);
      setMessage('Erreur lors du chargement des enregistrements.');
      setMessageType('error');
      setOpenSnackbar(true);
    }
  };

  const handleCreate = async () => {
    if (!newText.trim()) {
      setMessage('Le texte ne peut pas être vide.');
      setMessageType('error');
      setOpenSnackbar(true);
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/api/records/', { text: newText });
      setRecords([...records, response.data]);
      setNewText('');
      setMessage('Enregistrement créé avec succès.');
      setMessageType('success');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Erreur lors de la création de l\'enregistrement :', error);
      setMessage('Une erreur est survenue lors de la création.');
      setMessageType('error');
      setOpenSnackbar(true);
    }
  };

  const handleEditClick = (record) => {
    setEditRecord(record);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setEditRecord(null);
  };

  const handleEditInputChange = (e) => {
    setEditRecord({ ...editRecord, text: e.target.value });
  };

  const handleDialogSave = async () => {
    if (!editRecord.text.trim()) {
      setMessage('Le texte ne peut pas être vide.');
      setMessageType('error');
      setOpenSnackbar(true);
      return;
    }
    try {
      const response = await axios.put(`http://localhost:8000/api/records/${editRecord.id}/`, { text: editRecord.text });
      setRecords(records.map((record) => (record.id === editRecord.id ? response.data : record)));
      setMessage('Enregistrement mis à jour avec succès.');
      setMessageType('success');
      setOpenSnackbar(true);
      handleDialogClose();
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'enregistrement :', error);
      setMessage('Une erreur est survenue lors de la mise à jour.');
      setMessageType('error');
      setOpenSnackbar(true);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?')) {
      try {
        await axios.delete(`http://localhost:8000/api/records/${id}/`);
        setRecords(records.filter((record) => record.id !== id));
        setMessage('Enregistrement supprimé avec succès.');
        setMessageType('success');
        setOpenSnackbar(true);
      } catch (error) {
        console.error('Erreur lors de la suppression de l\'enregistrement :', error);
        setMessage('Une erreur est survenue lors de la suppression.');
        setMessageType('error');
        setOpenSnackbar(true);
      }
    }
  };


    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          maxWidth="xs"
          style={{
            padding: '0',
            borderRadius: '12px',
            textAlign: 'center',
            marginTop: '2rem',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <AppTitle />
        </Container>
        <Container
          maxWidth="xs"
          style={{
            padding: '0',
            borderRadius: '12px',
            textAlign: 'center',
            marginTop: '2rem',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
          }}
        >
          <Box
      sx={{
        backgroundColor: '#ffffff',
        padding: 2,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        marginTop: '1rem',
      }}
    >
          <TaskForm
            newText={newText}
            setNewText={setNewText}
            handleCreate={handleCreate}
          />
          <TaskList
            records={records}
            handleEditClick={handleEditClick}
            handleDelete={handleDelete}
          />
          <EditDialog
            openDialog={openDialog}
            handleDialogClose={handleDialogClose}
            editRecord={editRecord}
            handleEditInputChange={handleEditInputChange}
            handleDialogSave={handleDialogSave}
          />
          <NotificationSnackbar
            openSnackbar={openSnackbar}
            setOpenSnackbar={setOpenSnackbar}
            message={message}
            messageType={messageType}
          />
          </Box>
        </Container>
      </ThemeProvider>
    );
  }


export default App;
