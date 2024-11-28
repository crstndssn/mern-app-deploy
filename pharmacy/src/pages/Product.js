import React from "react";

const Product = () => {
	return (
		<div className="container mx-auto ">

			<div className="flex justify-between items-center">
				<div className="w-1/2">
					<img className="w-full h-auto" src="https://beta1.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwe1202ec7/images/large/550615_1_LIMPIADOR_FACIAL_DIARIO_CETAPHIL_PIEL_MIXTA_A_GRASA_Y_SENSIBLE_FCO_X_473ML%20(2).jpg?sw=295&sh=295" alt="imagen cremita" />
				</div>
				<div className="w-1/2">
					<h1 className="font-bold text-3xl mb-10">Esta es mi ficha de producto</h1>
					<p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<a className="bg-green-700 p-4 text-white rounded-xl border border-green-700 hover:bg-white hover:text-green-700">comprar</a>
				</div>
			</div>
		</div>
	)
}

export default Product