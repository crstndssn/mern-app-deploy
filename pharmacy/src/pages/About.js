import React from "react";
import img11 from '../images/pharimg.jpg'
import img2 from '../images/davilogo.jpg'
import img3 from '../images/nequilogo.jpg'
import img4 from '../images/pselogo.jpg'
import img5 from '../images/facebook.png'
import img6 from '../images/youtube.png'
import img7 from '../images/x.png'
import img8 from '../images/instagram.png'



import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import video from '../images/glass.jpg'


const About = () => {
	return (
		<div class="relative min-h-screen h-full bg-white">
			<img class="absolute top-0 left-0 w-full h-full object-cover p-2 md:p-7 rounded-[1.5rem] md:rounded-[3rem]" src={video} frameborder="0" />
			<div class="relative z-10 flex items-center justify-between flex-col pt-10 h-screen">
				<Navigation />
				<div className="px-5 md:px-0">
					<div className="border-2 border-white hover:border-black container mx-auto bg-white rounded-xl mb-7 py-3 md:py-7 px-4 md:px-10">
						<div className="flex flex-col md:flex-row justify-center">
							<h1 class="text-6xl font-semibold w-full">Quienes somos</h1>
							<p className="text-xl">¡Bienvenido a Cocktail Corner! Somos tu destino para cócteles frescos y deliciosos. Desde nuestros modestos inicios, nos hemos convertido en un lugar de referencia en la comunidad, ofreciendo una amplia variedad de bebidas de alta calidad y un servicio excepcional. Nos enorgullece usar solo los mejores ingredientes y apoyar a nuestra comunidad. ¡Únete a nosotros para disfrutar de momentos memorables y sabores únicos!</p>
						</div>

					</div>
					<Footer />
				</div>

			</div>
		</div>
	)
}

export default About