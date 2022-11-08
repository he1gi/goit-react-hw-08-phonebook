import { Input } from './Filtrarion.styled';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Redux/filterSlice';
import { getFilter } from '../../Redux/selectors';

export default function Filtration() {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilterInput = e => {
    const { value } = e.target;
    const action = setFilter(value);
    dispatch(action);
  };

  return (
    <label>
      Write a name to find the contact:
      <Input
        type="text"
        value={filter}
        name="filter"
        onChange={handleFilterInput}
      ></Input>
    </label>
  );
}
