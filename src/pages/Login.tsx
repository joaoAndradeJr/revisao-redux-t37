import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNameAction } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(setNameAction(name));
    navigate('/products');
  };

  return (
    <form>
      <input
        type="text"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
        required
      />
      <button
        type="button"
        onClick={ handleSubmit }
      >
        Entrar
      </button>
    </form>
  );
}
