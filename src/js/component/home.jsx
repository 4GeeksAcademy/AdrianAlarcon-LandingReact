import React from "react";

import NavBar from "./navBar";
import Jumbotron from "./jumbotron";
import Card from "./card";

const Home = () => {
	const images = [
		{ url: "https://t1.ea.ltmcdn.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_600.jpg", name: "Gatito llorón" },
		{ url: "https://t1.ea.ltmcdn.com/es/posts/1/5/1/los_10_gatos_mas_raros_del_mundo_22151_600.jpg", name: "Sacando lengua" },
		{ url: "https://t2.uc.ltmcdn.com/es/posts/5/0/6/como_saber_si_un_gato_es_macho_o_hembra_con_fotos_10605_600_square.jpg", name: "Gatito tapado" },
		{ url: "https://theavh.org/wp-content/uploads/scaredy-cat.jpg", name: "Gatito tricolor" }
	]
	return (
		<div >
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					{images.map((image, index) => (
						<div key={index} className="col-md-3 col-sm-6">
							<Card imageUrl={image.url} name={image.name} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
