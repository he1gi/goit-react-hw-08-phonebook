import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authLogout } from 'Redux/auth/auth-operation';
import { selectUserName } from 'Redux/auth/auth-selectors';
import Button from '@mui/material/Button';

function UserMenu() {
  const username = useSelector(selectUserName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authLogout())
      .unwrap()
      .then(() => {
        toast.info('You logouted!');
        navigate('/login', { replace: true });
      })
      .catch(error => {
        toast.error(`error during logout - ${error}`);
      });
  };

  return (
    <div>
      <span style={{ fontWeight: '700', marginRight: '15px' }}>
        Hello, {username}!
      </span>
      <Button variant="outlined" size="small" onClick={handleLogout}>
        LogOut
      </Button>
    </div>
  );
}

export default UserMenu;
