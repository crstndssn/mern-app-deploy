import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Navigation from './Navigation'

import CocktailSearch from '../pages/CocktailSearch';
import header from '../images/header.jpg'
import video from '../images/glass.jpg'
const Menu = () => {

	return (
		<div className='container mx-auto w-full flex flex-col md:flex-row gap-4 mb-10 px-4 md:px-0'>
			<div class="w-full md:w-3/5 shadow-xl bg-white rounded-xl">
				<h2 class="text-black text-center text-2xl md:text-4xl p-4">
					Este verano, hidrátate y cuida tu salud con nuestros cócteles medicinales frescos y naturales.
				</h2>
			</div>
			<div className="w-full md:w-2/5 flex flex-col md:flex-row gap-2 md:gap-4">
				<div className='text-center w-full bg-white hover:bg-black hover:text-white rounded-xl flex justify-start items-end p-2 md:p-4 border-2 border-black cursor-pointer'>
					<Link to="/" className='w-full h-full text-xl md:text-4xl text-center flex items-center justify-center'>inicio</Link>
				</div>
				<div className='text-center w-full bg-white hover:bg-black hover:text-white rounded-xl flex justify-start items-end p-2 md:p-4 border-2 border-black cursor-pointer'>
					<Link to="/contact" className='w-full h-full text-xl md:text-4xl text-center flex items-center justify-center'>contact</Link>
				</div>
				<div className='text-center w-full bg-white hover:bg-black hover:text-white rounded-xl flex justify-start items-end p-2 md:p-4 border-2 border-black cursor-pointer'>
					<Link to="/about" className='w-full h-full text-xl md:text-4xl text-center flex items-center justify-center'>about</Link>
				</div>
			</div>
		</div>
	)
}

export default Menu