import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const privateApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const token = {
  set(value) {
    privateApi.defaults.headers.Authorization = `Bearer ${value}`;
  },
  unset() {
    privateApi.defaults.headers.Authorization = null;
  },
};

export const fetchContacts = async () => {
  const { data } = await privateApi.get('contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await privateApi.post('contacts', contact);
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await privateApi.delete(`contacts/${contactId}`);
  return data;
};

export const registerNewUser = async userCredentials => {
  const { data } = await publicApi.post('users/signup', userCredentials);
  return data;
};

export const loginUser = async userCredentials => {
  const { data } = await publicApi.post('users/login', userCredentials);
  return data;
};

export const logoutUser = async token => {
  const { data } = await privateApi.post('users/logout', token);
  return data;
};

export const fetchCurrentUser = async token => {
  const { data } = await privateApi.get('users/current', token);
  return data;
};
