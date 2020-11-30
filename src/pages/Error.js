import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Error() {
	return (
		<>
			<Header></Header>
			<main className="container-fluid">
				<h1 className="text-danger text-center my-4">404</h1>
				<h3 className="text-danger text-center">Not Found</h3>
			</main>
			<Footer></Footer>
		</>
	);
}
