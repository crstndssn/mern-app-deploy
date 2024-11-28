import { Link } from 'react-router-dom'

import video from '../../images/glass.jpg'

const header = () => {
  return (
    <div className="container mx-auto">
    <div className="flex-col-reverse md:flex-row flex items-center justify-between bg-black text-white py-10">
        <div className="md:w-3/5 w-full text-content mt-10 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-limon">descubre</span> sabores, <br />
                
                 
                 guarda <span className="text-limon"> experiencias.</span>
            </h1>
            <p className="text-lg md:text-xl mt-4">
                Tus recetas de cócteles. Lleva tu barra personal a otro nivel.
            </p>
            <div className="mt-6 flex space-x-4">
                <Link
                    to="/add-task"	
                    className="bg-limon text-black px-6 py-3 rounded-full font-bold shadow-lg hover:bg-lime-400 transition"
                >
                    Crear Bebida
                </Link>
                <Link
                    href="#"
                    className="bg-black border border-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
                >
                    Mis bebidas
                </Link>
            </div>
        </div>
        <div className="image-content md:w-2/5 w-full">
            <img
                className="w-full md:w-full h-full rounded-[100%]"
                src={video}
                alt="Abstract illustration"
            />
        </div>
    </div>

</div>
  )
}

export default header