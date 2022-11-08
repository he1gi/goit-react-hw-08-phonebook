import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addNewContact,
  deleteOldContact,
} from './contacts-operation';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContacts.pending]: store => {
      store.loading = true;
    },

    [getContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },

    [getContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    //------------------------------------------------------
    [addNewContact.pending]: store => {
      store.loading = true;
    },

    [addNewContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },

    [addNewContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    //------------------------------------------------------
    [deleteOldContact.pending]: store => {
      store.loading = true;
    },

    [deleteOldContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },

    [deleteOldContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
