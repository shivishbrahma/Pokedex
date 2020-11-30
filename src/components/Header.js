import React from 'react';

export default function Header() {
	return (
		<header>
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<a className="navbar-brand h3" href="/">
					<img src="/logo.png" className="logo" alt="Pokedex" />
					Pokedex
				</a>
			</nav>
		</header>
	);
}
