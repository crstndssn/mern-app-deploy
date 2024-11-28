import React, { useState, useEffect } from 'react';

const TodosLosProductos = () => {
  const [productos, setProductos] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [filtroVaso, setFiltroVaso] = useState('');
  const [filtroAlcoholico, setFiltroAlcoholico] = useState('');

  useEffect(() => {
    const fetchTodosLosProductos = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        const data = await response.json();
        if (data.drinks) {
          setProductos(data.drinks);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchTodosLosProductos();
  }, []);

  const handleCategoriaChange = (event) => {
    setFiltroCategoria(event.target.value);
  };

  const handleVasoChange = (event) => {
    setFiltroVaso(event.target.value);
  };

  const handleAlcoholicoChange = (event) => {
    setFiltroAlcoholico(event.target.value);
  };

  const productosFiltrados = productos.filter(producto => {
    return (
      (filtroCategoria === '' || producto.strCategory === filtroCategoria) &&
      (filtroVaso === '' || producto.strGlass === filtroVaso) &&
      (filtroAlcoholico === '' || producto.strAlcoholic === filtroAlcoholico)
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todos los Productos</h1>

      <div className="flex space-x-4 mb-4">
        {/* Dropdown para filtrar por categoría */}
        <div>
          <label htmlFor="filtroCategoria" className="mr-2">Categoría:</label>
          <select
            id="filtroCategoria"
            value={filtroCategoria}
            onChange={handleCategoriaChange}
            className="px-2 py-1 border rounded"
          >
            <option value="">Todos</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Shot">Shot</option>
            {/* Agrega más opciones de categoría según los datos disponibles */}
          </select>
        </div>

        {/* Dropdown para filtrar por tipo de vaso */}
        <div>
          <label htmlFor="filtroVaso" className="mr-2">Tipo de Vaso:</label>
          <select
            id="filtroVaso"
            value={filtroVaso}
            onChange={handleVasoChange}
            className="px-2 py-1 border rounded"
          >
            <option value="">Todos</option>
            <option value="Highball glass">Highball Glass</option>
            <option value="Cocktail glass">Cocktail Glass</option>
            {/* Agrega más opciones de tipo de vaso según los datos disponibles */}
          </select>
        </div>

        {/* Dropdown para filtrar por alcohólico / no alcohólico */}
        <div>
          <label htmlFor="filtroAlcoholico" className="mr-2">Alcohólico:</label>
          <select
            id="filtroAlcoholico"
            value={filtroAlcoholico}
            onChange={handleAlcoholicoChange}
            className="px-2 py-1 border rounded"
          >
            <option value="">Todos</option>
            <option value="Alcoholic">Alcohólico</option>
            <option value="Non alcoholic">No Alcohólico</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productosFiltrados.map(producto => (
          <div key={producto.idDrink} className="bg-white rounded p-4 shadow-md">
            <img src={producto.strDrinkThumb} alt={producto.strDrink} className="w-full h-40 object-cover mb-2 rounded" />
            <h2 className="text-lg font-semibold">{producto.strDrink}</h2>
            <p className="text-gray-600">{producto.strCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodosLosProductos;
