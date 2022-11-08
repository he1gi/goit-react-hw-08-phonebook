import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authLogin, authRegister } from 'Redux/auth/auth-operation';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = event => {
    event.preventDefault();
    const newUser = { name, email, password };
    dispatch(authRegister(newUser))
      .unwrap()
      .then(() => {
        toast.success('You successfully created an account!');
        dispatch(authLogin({ email, password }));
        navigate('/', { replace: true });
      })
      .catch(() => toast.error('Something went wrong!Please, try again.'));
    resetForm();
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'name') {
      setName(value);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
  };
  return (
    <>
      <h2>Register Form</h2>
      <Box
        sx={{
          '& > :not(style)': { m: 1, width: '25ch', margin: '0 auto' },
        }}
        autoComplete="off"
        component="form"
        onSubmit={handleSubmitForm}
      >
        <div>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Full name"
            variant="outlined"
            margin="normal"
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            margin="normal"
            onChange={handleInputChange}
            value={email}
            type="email"
            name="email"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            margin="normal"
            onChange={handleInputChange}
            value={password}
            type="password"
            name="password"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div style={{ marginTop: '30px' }}>
          <Button
            variant="contained"
            size="small"
            type="submit"
            name="submit"
            endIcon={<SendIcon />}
          >
            Register
          </Button>
          <Link to="/login"> Already has an account?</Link>
        </div>
      </Box>
    </>
  );
}

export default RegisterForm;
