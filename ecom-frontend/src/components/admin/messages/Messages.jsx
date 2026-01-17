import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Button, TextField, Box, Typography, IconButton } from '@mui/material';
import { FaTrash, FaSearch } from 'react-icons/fa';
import { getAllMessages, deleteMessage } from '../../../store/actions';
import toast from 'react-hot-toast';

const Messages = () => {
  const dispatch = useDispatch();
  const { messages, totalElements } = useSelector(state => state.messages);
  const { isLoading } = useSelector(state => state.errors);
  const [search, setSearch] = useState('');
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  useEffect(() => {
    const queryString = `pageNumber=${paginationModel.page}&pageSize=${paginationModel.pageSize}&search=${search}`;
    dispatch(getAllMessages(queryString));
  }, [dispatch, paginationModel, search]);

  const handleDelete = (messageId) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      dispatch(deleteMessage(messageId, toast));
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'subject', headerName: 'Subject', width: 200 },
    { field: 'message', headerName: 'Message', width: 300, flex: 1 },
    { 
      field: 'createdAt', 
      headerName: 'Received At', 
      width: 180,
      valueFormatter: (params) => new Date(params.value).toLocaleString()
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: (params) => (
        <IconButton
          color="error"
          onClick={() => handleDelete(params.row.id)}
        >
          <FaTrash />
        </IconButton>
      ),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Contact Messages
      </Typography>
      
      <Box sx={{ mb: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
        <TextField
          placeholder="Search messages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: <FaSearch style={{ marginRight: 8, color: '#666' }} />,
          }}
          sx={{ minWidth: 300 }}
        />
      </Box>

      <DataGrid
        rows={messages}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        rowCount={totalElements}
        paginationMode="server"
        loading={isLoading}
        pageSizeOptions={[5, 10, 25]}
        disableRowSelectionOnClick
        sx={{ height: 600 }}
      />
    </Box>
  );
};

export default Messages;