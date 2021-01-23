import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<nav className="navbar navbar-expand-sm navbar-dark">
				<Link className="navbar-brand h3" to="/">
					<img src="./logo.png" className="logo" alt="Pokedex" />
					Pokedex
				</Link>
			</nav>
		</header>
	);
}
