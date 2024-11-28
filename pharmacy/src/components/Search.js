import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import { ButtonLink } from './ui';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const modalRef = useRef();
  const navigate = useNavigate();


  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  const searchCocktailsByName = async () => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      setCocktails(data.drinks || []);
      setIsSearching(true);
    } catch (error) {
      console.error('Error fetching cocktails:', error);
    }
  };

  const listCocktailsByFirstLetter = async (letter) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
      const data = await response.json();
      setCocktails(data.drinks || []);
      setIsSearching(true);
    } catch (error) {
      console.error('Error fetching cocktails by letter:', error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchCocktailsByName();
  };

  const handleLetterClick = (letter) => {
    listCocktailsByFirstLetter(letter);
  };

  const closeModal = () => {
    setIsSearching(false);
    setCocktails([]);
    setSearchTerm('');
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isSearching) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearching]);

  const handleProductClick = (id) => {
    closeModal();  // Cierra el modal
    navigate(`/product/${id}`);  // Navega a la página de detalles del producto
  };

  return (
    <>
      <div className='w-full flex flex-col bg-black'>
        <div className="container mx-auto flex justify-center">
          <div className="w-full md:w-2/4">
            <form onSubmit={handleSearchSubmit} className="w-full md:flex flex-col gap-4 px-4">
              <input
                className="w-full border-2 border-limon bg-black focus-visible:border-2 focus-visible:bg-limon focus-visible:text-black md:placeholder:text-white focus-visible:placeholder:text-black py-3 px-4 md:py-5 md:px-16 rounded-4xl text-white rounded-full text-base md:text-3xl placeholder:text-base md:placeholder:text-3xl mb-3 md:mb-0"
                type="text"
                placeholder="wine, kiwi, mojito, moscow mule..."
                value={searchTerm}
                onChange={handleSearchInputChange}
                autoFocus
              />

              <div className="flex justify-center items-center gap-7">
                <button type="submit" className="w-full md:w-48 bg-black hover:bg-white hover:text-black p-2 text-white md:text-xl font-medium border-2 rounded-full border-white">
                  Search
                </button>

                {isAuthenticated ? (
                  <>
                    <Link to='/add-task' type="submit" className="w-full text-center md:w-48 bg-[#ceff1a] hover:bg-black hover:text-[#ceff1a] p-2 text-black md:text-xl font-medium border-2 rounded-full border-[#ceff1a]">
                      crear
                    </Link>
                  </>
                ) : (
                  <div className="flex">
                    <Link to='register' type="submit" className="w-full text-center md:w-64 bg-black hover:bg-white hover:text-black p-2 text-white md:text-xl font-medium border-2 rounded-full border-white">
                      Registro
                    </Link>

                    <Link to='login' type="submit" className="w-full md:w-64 bg-[#ceff1a] hover:bg-black hover:text-[#ceff1a] p-2 text-black md:text-xl font-medium border-2 rounded-full border-[#ceff1a]">
                      Ingresar
                    </Link>
                  </div>
                )}
              </div>

            </form>
          </div>

        </div>


      </div>

      <div className="hidden md:flex overflow-y-scroll md:overflow-y-hidden container mx-auto  items-center py-5 rounded-b-xl">
          <div className="w-full text-center">
            <div className="flex justify-center gap-2 mt-3">
              {Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index)).map((letter) => (
                <button className="border border-white text-white hover:border-limon hover:text-limon rounded-full w-10 h-10 flex justify-center items-center" key={letter} onClick={() => handleLetterClick(letter)}>
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>

      {isSearching && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center">
          <div ref={modalRef} className="bg-black rounded-xl p-1 py-14 relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-limon hover:text-limon focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="max-h-[80vh] overflow-y-scroll container mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-7 p-4">
              {cocktails.map((cocktail) => (
                <li className="border-2 border-black rounded-lg cursor-pointer" key={cocktail.idDrink} onClick={() => handleProductClick(cocktail.idDrink)}>
                  <img className="border border-white rounded-md" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                  <h3 className="p-2 md:p-2 font-medium md:text-xl text-white">{cocktail.strDrink}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
