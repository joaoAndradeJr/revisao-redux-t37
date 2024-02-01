import { useEffect, useState } from 'react';
import ProductCard from '../components/ProdutCard';
import Header from '../components/Header';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <>
      <Header />
      { products.map(({ title, brand, thumbnail, price, id }) => (
        <ProductCard
          key={ id }
          title={ title }
          brand={ brand }
          thumbnail={ thumbnail }
          price={ price }
          id={ id }
        />
      )) }
    </>
  );
}
