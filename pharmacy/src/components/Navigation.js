import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import { ButtonLink } from './ui';

const Navigation = () => {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user)

  return (
    <>
      <div className='w-full flex flex-col bg-black'>
        <div className="container mx-auto w-full flex flex-col md:flex-row justify-between items-center py-7 shadow-xl  md:rounded-b-none transition-transform duration-700 ease-in-out">
          <div className="w-full md:w-1/4">
            <h2 className="font-bold text-4xl text-center md:text-left my-3 md:my-0 text-white">MIXOLOGY</h2>
          </div>

          {isAuthenticated ? (
            <div className="flex gap-2">
              <p className='text-white text-xl flex justify-center items-center gap-2 mr-4'>
                Welcome <span className="text-limon text-4xl mb-1">{user.username}</span>
              </p>

              <ButtonLink to="/add-task">Crear Bebida</ButtonLink>

              <Link className='w-fit text-center bg-black hover:bg-white hover:text-black px-4 py-2 text-white md:text-xl font-medium border-2 rounded-full border-white' to="/tasks">Mis Bebidas</Link>

              <Link
                className="border-2 border-[#ceff1a] rounded-full text-[#ceff1a] flex justify-center items-center w-12 h-12"
                to="/"
                onClick={() => logout()}
                aria-label="Logout"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#ceff1a"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 006 20.25h7.5a2.25 2.25 0 002.25-2.25V15M12 9l3 3m0 0l-3 3m3-3H3"
                  />
                </svg>
              </Link>



            </div>
          ) : (
            <div className="flex w-full gap-3 mt-3 md:mt-0 md:w-1/4">
              <Link to='register' type="submit" className="w-full text-center md:w-64 bg-black hover:bg-white hover:text-black p-2 text-white md:text-xl font-medium border-2 rounded-full border-white">
                Registro
              </Link>

              <Link to='login' type="submit" className="w-full text-center md:w-64 bg-[#ceff1a] hover:bg-black hover:text-[#ceff1a] p-2 text-black md:text-xl font-medium border-2 rounded-full border-[#ceff1a]">
                Ingresar
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
