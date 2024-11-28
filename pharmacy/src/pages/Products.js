import React, { useState, useEffect } from 'react';

const Products = () => {
  const [cocktail, setCocktail] = useState(null);
  const cocktailId = '11007'; // ID del cóctel a mostrar (puedes cambiarlo según necesites)

  useEffect(() => {
    // Función para obtener los detalles del cóctel por su ID
    const fetchCocktailDetails = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`);
        const data = await response.json();

        if (data.drinks && data.drinks.length > 0) {
          setCocktail(data.drinks[0]); // Establecer los detalles del cóctel en el estado
        } else {
          setCocktail(null); // Si no se encuentra el cóctel, establecer el estado como null
        }
      } catch (error) {
        console.error('Error fetching cocktail details:', error);
        setCocktail(null); // En caso de error, establecer el estado como null
      }
    };

    // Llamar a la función para obtener los detalles del cóctel al montar el componente
    fetchCocktailDetails();
  }, [cocktailId]); // Se ejecuta solo cuando cambia el cocktailId

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Detalles del Cóctel</h1>
      {cocktail ? (
        <div className="flex flex-col items-center">
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="max-w-full mb-4" />
          <h2 className="text-xl font-semibold">{cocktail.strDrink}</h2>
          <p className="text-gray-600 mb-2">Categoría: {cocktail.strCategory}</p>
          <p className="text-gray-600 mb-2">Tipo de vaso: {cocktail.strGlass}</p>
          <p className="text-gray-700 mb-4">{cocktail.strInstructions}</p>
          <h3 className="text-lg font-semibold mb-2">Ingredientes:</h3>
          <ul className="list-disc list-inside">
            {Array.from({ length: 15 }).map((_, index) => {
              const ingredient = cocktail[`strIngredient${index + 1}`];
              const measure = cocktail[`strMeasure${index + 1}`];
              if (ingredient && measure) {
                return (
                  <li key={index} className="text-gray-700">
                    {ingredient}: {measure}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      ) : (
        <p className="text-red-600">No se encontraron detalles para el cóctel con ID {cocktailId}.</p>
      )}
    </div>
  );
};

export default Products;
