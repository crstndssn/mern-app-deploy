import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import video from '../images/glass.jpg'


const ProductDetail = () => {
	const { id } = useParams();
	const [cocktail, setCocktail] = useState(null);

	useEffect(() => {
		const fetchCocktail = async () => {
			try {
				const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
				const data = await response.json();
				setCocktail(data.drinks[0]);
			} catch (error) {
				console.error('Error fetching cocktail details:', error);
			}
		};

		fetchCocktail();
	}, [id]);

	if (!cocktail) {
		return <div>Loading...</div>;
	}

	return (
		<div className="relative h-full bg-black text-white">
			<div className="z-10 flex items-center justify-between flex-col pt-10">
				<div className="container md:mx-auto w-[90%] md:w-full my-3 p-2 md:mt-0 md:p-4 rounded-xl">
					<div className="flex flex-col md:flex-row md:justify-center items-center h-full gap-7">
						<div className='md:w-1/2 flex items-center'>
							<img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-full rounded-xl" />
						</div>
						<div className='flex flex-col gap-10'>
							<h2 className="text-5xl font-semibold mb-3">{cocktail.strDrink}</h2>
							<div className="border-2 p-3 py-4 rounded-xl">
								<p className="mb-2 text-xl"><span className='font-semibold'>Categoría:</span> {cocktail.strCategory}</p>
								<p className="mb-2 text-xl"><span className='font-semibold'>Tipo de vaso:</span> {cocktail.strGlass}</p>
								<p className="mb-4 text-2xl mt-4">{cocktail.strInstructions}</p>
							</div>
						</div>
					</div>
					<div className='md:w-full flex flex-col'>
						<div className='bg-limon text-black w-full rounded-md py-4 px-6 mt-12 flex justify-around'>
							<h3 className="text-4xl w-1/3 font-semibold mb-2 border border-black h-fit px-8 py-4 rounded-full text-center">Ingredientes</h3>
							<ul className="w-2/3 pl-12 list-disc list-inside">
								{Array.from({ length: 15 }).map((_, index) => {
									const ingredient = cocktail[`strIngredient${index + 1}`];
									const measure = cocktail[`strMeasure${index + 1}`];
									if (ingredient && measure) {
										return (
											<li key={index} className="text-xl">
												{ingredient}: {measure}
											</li>
										);
									}
									return null;
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	
};

export default ProductDetail;
