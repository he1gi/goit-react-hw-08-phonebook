import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'Redux/selectors';
import { getALLContacts, getState } from 'Redux/contacts/contacts-selectors';
import { List, Item } from './Contacts.styled';

import Button from '@mui/material/Button';

import Loader from '../Loader';

import {
  deleteOldContact,
  getContacts,
} from 'Redux/contacts/contacts-operation';

export default function Contacts() {
  const contacts = useSelector(getALLContacts);
  const isLoading = useSelector(getState);
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const identicFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(identicFilter)
  );

  const handleDeleteContact = id => {
    const action = deleteOldContact(id);
    dispatch(action);
  };

  const contactsToMap = filteredContacts ? filteredContacts : contacts;

  return (
    <List>
      {isLoading && <Loader />}
      {!isLoading &&
        contactsToMap.map(({ name, id, number }) => (
          <Item key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <Button
              variant="outlined"
              size="small"
              type="button"
              name="delete"
              onClick={() => handleDeleteContact(id)}
            >
              Delete
            </Button>
          </Item>
        ))}
    </List>
  );
}
