import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from '../../Api/api';

export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchContacts();
      return data;
    } catch (error) {
      toast.error(`${error.message}`, {
        autoClose: 1000,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await addContact(data);
      toast.success(' You added new contact!', {
        autoClose: 1000,
      });
      return result;
    } catch (error) {
      toast.error(`${error.message}`, {
        autoClose: 1000,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const deleteOldContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const result = await deleteContact(id);
      toast.success('Contact has been deleted!', {
        autoClose: 1000,
      });
      return result.id;
    } catch (error) {
      toast.error(`${error.message}`, {
        autoClose: 1000,
      });
      return rejectWithValue(error.message);
    }
  }
);
