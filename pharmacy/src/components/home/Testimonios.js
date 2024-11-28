import React from 'react'

const Testimonios = () => {
  return (
<section className="bg-black text-white p-8 rounded-[3rem] mt-10">
  <h2 className="text-4xl md:text-5xl font-bold text-center">
    Lo que dicen nuestros usuarios
  </h2>
  <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
    No solo guardamos recetas de cócteles, sino experiencias inolvidables. Esto es lo que nuestros usuarios están diciendo:
  </p>
  <div className="flex flex-wrap justify-center gap-8 mt-8">
    {/* Testimonio 1 */}
    <div className="bg-gray-800 rounded-2xl p-6 max-w-sm text-center shadow-lg">
      <p className="text-limon font-semibold">"¡Los mejores cócteles!"</p>
      <p className="mt-3 text-gray-300">
        "Me sorprendió la calidad y creatividad de estas recetas. Perfectas para mi fiesta."
      </p>
      <p className="mt-3 text-sm text-gray-400">- Alex G.</p>
    </div>
    {/* Testimonio 2 */}
    <div className="bg-gray-800 rounded-2xl p-6 max-w-sm text-center shadow-lg">
      <p className="text-limon font-semibold">"Sabores increíbles!"</p>
      <p className="mt-3 text-gray-300">
        "Cada receta fue como un viaje a un paraíso tropical. ¡Altamente recomendado!"
      </p>
      <p className="mt-3 text-sm text-gray-400">- Jamie L.</p>
    </div>
    {/* Testimonio 3 */}
    <div className="bg-gray-800 rounded-2xl p-6 max-w-sm text-center shadow-lg">
      <p className="text-limon font-semibold">"Perfecto para eventos!"</p>
      <p className="mt-3 text-gray-300">
        "Fue muy fácil personalizar las recetas. Mis invitados quedaron encantados."
      </p>
      <p className="mt-3 text-sm text-gray-400">- Taylor S.</p>
    </div>
  </div>
</section>

  )
}

export default Testimonios