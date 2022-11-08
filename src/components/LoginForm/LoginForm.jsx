import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authLogin } from 'Redux/auth/auth-operation';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = event => {
    event.preventDefault();
    const user = { email, password };
    dispatch(authLogin(user))
      .unwrap()
      .then(() => {
        toast.success('Glad to see you again!');
        navigate('/contacts', { replace: true });
      })
      .catch(() =>
        toast.error('Something went wrong! Please check your email or password')
      );
    resetForm();
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <h2> Login Form</h2>
      <Box
        sx={{
          '& > :not(style)': { m: 1, width: '25ch', marginBottom: '30px' },
        }}
        autoComplete="off"
        component="form"
        onSubmit={handleSubmitForm}
      >
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
          onChange={handleInputChange}
          value={password}
          type="password"
          name="password"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <div style={{ margin: '0 auto' }}>
          <Button variant="contained" size="small" type="submit" name="submit">
            Login
          </Button>
          <Link to="/register"> Dont't have an account?</Link>
        </div>
      </Box>
    </>
  );
}

export default LoginForm;
