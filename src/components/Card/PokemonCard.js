import React from 'react';

const img_val =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const PokemonCard = (props) => {
	return (
		<div
			className="pokemonCard col-6 col-md-4 col-lg-3 col-xl-2"
			onClick={() => {
				props.onClick(props.id);
			}}
		>
			<img
				src={`${img_val}${props.id}.png`}
				alt={props.id}
				className="poke_card-img"
			/>
			<h3>{props.name}</h3>
		</div>
	);
};
export default PokemonCard;
