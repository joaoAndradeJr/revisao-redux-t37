import { useSelector } from 'react-redux';
import { RootStateType } from '../redux';

export default function Header() {
  const { name } = useSelector((state: RootStateType) => state.cartReducer);
  const { total } = useSelector((state: RootStateType) => state.cartReducer);

  return (
    <header>
      <h2>{ `Nome: ${ name }` }</h2>
      <h3>{ `Total no carrinho: $${ total }`}</h3>
    </header>
  );
}
