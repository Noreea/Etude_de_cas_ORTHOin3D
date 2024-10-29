import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

function TaskList({ records, handleEditClick, handleDelete }) {
  return (

      <List>
        {records.length > 0 ? (
          records.map((record) => (
            <ListItem
              key={record.id}
              sx={{
                borderBottom: '1px solid #ffffff',
                '&:last-child': { borderBottom: 'none' },
                paddingY: 1.5,
              }}
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEditClick(record)}
                    color="primary"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(record.id)}
                    color="error"
                  >
                    <Delete />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={record.text}
                primaryTypographyProps={{
                  sx: {
                    textDecoration: record.completed ? 'line-through' : 'none',
                    color: record.completed ? 'text.secondary' : 'text.primary',
                  },
                }}
              />
            </ListItem>
          ))
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
          >
            Aucun enregistrement pour le moment.
          </Typography>
        )}
      </List>

  );
}

export default TaskList;
