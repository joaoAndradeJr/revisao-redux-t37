import { useDispatch } from 'react-redux';
import { ProductType } from '../types';
import { addToCartAction } from '../redux/actions';

export default function ProductCard(props: ProductType) {
  const { id, title, brand, thumbnail, price } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCartAction({ id, title, brand, thumbnail, price }));
  };

  return (
    <div>
      <h2>{ `Produto: ${ title }` }</h2>
      <h3>{ `Marca: ${ brand }` }</h3>
      <img src={ thumbnail } alt={ `${ brand } - ${ title }` } />
      <h4>{ `Preço $: ${ price }` }</h4>
      <button
        type="button"
        onClick={ handleClick }
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
