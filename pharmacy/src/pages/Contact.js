import React from "react";

import Navigation from '../components/Navigation'
import Menu from '../components/Menu'

import Footer from '../components/Footer'
// import Footer from './components/Footer'
import video from '../images/glass.jpg'


const Contact = () => {
	return (
		<div class="relative min-h-screen h-full bg-white">
			<img class="absolute top-0 left-0 w-full h-full object-cover p-2 md:p-7 rounded-[1.5rem] md:rounded-[3rem] object-center" src={video} frameborder="0" />
			<div class="relative z-10 flex items-center justify-between flex-col pt-5 md:pt-10 h-screen">
				<Navigation />
				<div className="w-full px-5 md:px-0 mt-2 md:mt-2">
					<div class="border-2 border-white hover:border-black container md:mx-auto bg-white rounded-xl mb-7 py-7 px-4 md:px-10">
						<h2 className="text-3xl font-semibold tracking-tighter mb-4">Contactanos</h2>
						<div className="flex flex-col md:flex-row w-full gap-7">
							<div className="md:w-1/2 flex flex-col gap-4">
								<input type="text" className="border-2 border-black rounded-full py-3 px-5 decoration-gray-400 hover:decoration-black text-xl focus:outline-none focus:border-black max-w-screen-sm" placeholder="Nombre*" />
								<input type="text" className="border-2 border-black rounded-full py-3 px-5 decoration-gray-400 hover:decoration-black text-xl focus:outline-none focus:border-black max-w-screen-sm" placeholder="Apellido*" />
								<input type="email" className="border-2 border-black rounded-full py-3 px-5 decoration-gray-400 hover:decoration-black text-xl focus:outline-none focus:border-black max-w-screen-sm" placeholder="Correo electronico*" />
							</div>

							<div class="md:w-1/2 flex flex-col">
								<textarea type="text" class="h-full mb-2 border-2 p-4 border-black  decoration-gray-400 text-xl rounded-2xl focus:outline-none focus:border-black max-w-screen-sm" placeholder="Deje su mensaje aquí..." />
								<button className="border-2 border-black bg-black hover:bg-white text-xl text-white hover:text-black font-medium py-3 px-12 rounded-full">
									Enviar
								</button>
							</div>
						</div>


					</div>


			

				</div>

		<Footer />

			</div></div>
	)
}

export default Contact