import React from "react";

import { Link } from 'react-router-dom'
import img1 from '../images/Imgdrog.jpg'
import img2 from '../images/davilogo.jpg'
import img3 from '../images/nequilogo.jpg'
import img4 from '../images/pselogo.jpg'
import img5 from '../images/facebook.png'
import img6 from '../images/youtube.png'
import img7 from '../images/x.png'
import img8 from '../images/instagram.png'


const Footer = () => {
	return (
		<div className="py-12">
			<h2 className="text-3xl font-semibold tracking-tighter mb-4 text-white text-center">Contactanos</h2>
			<div className="container mx-auto flex gap-10">

				<div class="w-1/2">
					<div className="flex flex-col w-full gap-7">
						<div className="flex flex-col gap-4">
							<input type="text" className="border border-white focus:border-limon bg-transparent rounded-xl py-3 px-5 hover:decoration-black text-xl focus:outline-none text-limon" placeholder="Nombre" />
							<input type="email" className="border border-white focus:border-limon bg-transparent rounded-xl py-3 px-5 hover:decoration-black text-xl focus:outline-none text-limon" placeholder="Correo electronico" />
							<textarea type="text" class="border border-white focus:border-limon bg-transparent rounded-xl py-3 px-5 hover:decoration-black text-xl focus:outline-none text-limon" placeholder="Deje su mensaje aquí..." />
							<button className="border-2 border-limon bg-black hover:bg-limon text-xl text-limon hover:text-black font-medium py-3 px-12 rounded-xl">
								Enviar
							</button>
						</div>
					</div>
				</div>
				<div className="w-1/2">
					<div className="text-white w-full rounded-xl border-2 border-[#ceff1a] container mx-auto flex-col md:flex-row justify-between items-center md:py-6 px-12">
						<div className="w-full flex flex-col gap-2 text-center md:text-left">
							<h3 className="text-2xl mb-4 font-medium">Síguenos en redes</h3>
							<div className="flex justify-center md:justify-start gap-4 text-white">
								<a rel="noreferrer" target="_blank" href="https://www.facebook.com/">facebook</a>
								<a rel="noreferrer" target="_blank" href="https://www.youtube.com/">youtube</a>
								<a rel="noreferrer" target="_blank" href="https://twitter.com/?lang=es">twitter</a>
								<a rel="noreferrer" target="_blank" href="https://www.instagram.com/">instagram</a>
							</div>
						</div>
						<div className="w-full">

							<div className="gap-2 grid grid-cols-3 m-4">
								<div className="w-full h-10 md:h-24">
									<img
										src={img4}
										alt="Descripción de la imagen 1"
										className="object-cover w-full h-full rounded-md"
									/>
								</div>
								<div className="w-full h-10 md:h-24">
									<img
										src={img3}
										alt="Descripción de la imagen 2"
										className="object-cover w-full h-full rounded-md"
									/>
								</div>
								<div className="w-full h-10 md:h-24">
									<img
										src={img2}
										alt="Descripción de la imagen 3"
										className="object-cover w-full h-full rounded-md"
									/>
								</div>
							</div>

						</div>
					</div>
				</div >
			</div>
		</div>


	)
}

export default Footer