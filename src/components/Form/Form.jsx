import { useDispatch, useSelector } from 'react-redux';
import { getALLContacts } from '../../Redux/contacts/contacts-selectors';

import { addNewContact } from 'Redux/contacts/contacts-operation';

import { useState } from 'react';
import { toast } from 'react-toastify';

import { Input } from './Form.styled';
import Button from '@mui/material/Button';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getALLContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const submitData = { name: name, number: number };

    const action = addNewContact(submitData);

    const findName = contacts.find(contact => {
      return contact.name === name;
    });

    if (findName) {
      toast.error(`${findName.name} is already in your contacts list`, {
        autoClose: 1000,
      });
      return;
    }

    dispatch(action);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <Button variant="outlined" size="small" type="submit">
        Add contact
      </Button>
    </form>
  );
}
