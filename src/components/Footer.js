import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="navbar-dark text-center py-3">
			<div className="container">
				<span className="h5">
					Copyright &copy; 2020 | Made with <FaHeart className="text-danger" />{' '}
					Purbayan Chowdhury
				</span>
			</div>
		</footer>
	);
}
