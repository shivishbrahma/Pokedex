import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Detail extends React.Component {
	state = { data: '' };
	componentDidMount() {
		this.fetchPokemonDetail();
	}

	fetchPokemonDetail = () => {
		const url =
			'https://pokeapi.co/api/v2/pokemon/' + this.props.match.params.id;
		const configuration = {
			method: 'GET',
			headers: { 'accept-type': 'application/json' },
		};
		fetch(url, configuration)
			.then((response) => {
				return response.json();
			})
			.then((originalData) => {
				console.log(originalData);
				this.setState({ data: originalData });
			})

			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		console.log(this.state.data);
		return (
			<>
				<Header></Header>
				<div className="container-fluid">
					<div class="text-left row pokeCard justify-content-center">
						<div className="col-6 cardImageContainer">
							<img
								className="cardImage"
								src={`${'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'}${
									this.props.match.params.id
								}.png`}
								alt={this.props.match.params.id}
							/>
						</div>
						<div class="col-6 cardImageContainer">
							{this.state.data !== '' ? (
								<div>
									<div>
										<h4 className="card-title"> Name :</h4>
										<p className="card-text text-capitalize">
											{this.state.data.name}
										</p>
									</div>

									<div>
										<h4 className="card-title"> Height :</h4>
										<p className="card-text">
											{this.state.data.height * 10} cm
										</p>
									</div>
									<div>
										<h4 className="card-title"> Weight :</h4>
										<p className="card-text">
											{this.state.data.weight / 10} kg
										</p>
									</div>
									<div>
										<h4 className="card-title">Abilities :</h4>

										<div className="card-text text-capitalize">
											<ul>
												{this.state.data.abilities.map((item, i) => {
													return (
														<li className="text-capitalize" key={i}>
															{item.ability.name}
														</li>
													);
												})}
											</ul>
										</div>
									</div>
								</div>
							) : (
								<h1>Loading....</h1>
							)}
						</div>
					</div>
				</div>
				<Footer></Footer>
			</>
		);
	}
}
export default Detail;
