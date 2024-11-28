import React, { useState, useEffect } from 'react';

const Api = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Función para realizar la solicitud a la API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data); // Almacenar los datos en el estado local
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    // Llamar a la función para obtener los productos al montar el componente
    fetchProducts();

    // No olvides limpiar los efectos si es necesario
    return () => {
      // Código de limpieza si es necesario
    };
  }, []); // El segundo parámetro [] indica que este efecto se ejecuta solo una vez al montar el componente

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
						<img src={product.image} alt="" />
            <strong>{product.title}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Api;
