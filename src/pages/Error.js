import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Error({ error, message }) {
	return (
		<>
			<Header />
			<main className="container-fluid">
				<h1 className="text-danger text-center my-4">{error}</h1>
				<h3 className="text-danger text-center">{message}</h3>
			</main>
			<Footer />
		</>
	);
}

Error.propTypes = {
	error: PropTypes.number,
	message: PropTypes.string,
};
Error.defaultProps = {
	error: 404,
	message: 'Page Not Found',
};
