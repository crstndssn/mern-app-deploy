import React from 'react'
import Search from '../Search'

const Referencias = () => {
    return (

        <section className="bg-black text-white p-8 rounded-[3rem] mt-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
                Inspírate con los sabores de siempre
            </h2>
            <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
                Descubre nuestra colección de cócteles artesanales creados con los ingredientes más selectos.
            </p>
            <Search />
        </section>
    )
}

export default Referencias