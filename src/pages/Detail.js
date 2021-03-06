import { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Error from '../pages/Error';

class Detail extends Component {
	state = { data: '' };
	id = this.props.match.params.id;
	async componentDidMount() {
		if (this.id >= 0 && this.id <= 1116) {
			await this.fetchPokemonDetail();
			document.title = `Pokedex - ${
				this.state.data.name.charAt(0).toUpperCase() +
				this.state.data.name.slice(1)
			}`;
		} else {
			document.title = 'Pokedex - Invalid Pokemon Id';
		}
	}

	getNextPageUrl = () => {
		if (parseInt(this.id) >= 1116) return 'null';
		return `/detail/${parseInt(this.id) + 1}`;
	};

	getPrevPageUrl = () => {
		if (parseInt(this.id) <= 0) return 'null';
		return `/detail/${parseInt(this.id) - 1}`;
	};

	fetchPokemonDetail = async () => {
		const url = 'https://pokeapi.co/api/v2/pokemon/' + this.id;
		const configuration = {
			method: 'GET',
			headers: { 'accept-type': 'application/json' },
		};

		const response = await fetch(url, configuration);
		const data = await response.json();
		this.setState({ data: data });
	};

	render() {
		return (
			<>
				{this.id < 0 || this.id > 1116 ? (
					<Error message="Invalid Pokemon Id" />
				) : (
					<>
						<Header />
						<main className="container-fluid my-5 px-4">
							<div className="text-left row pokeCard justify-content-center">
								<div className="col-12 col-md-6 cardImageContainer">
									<img
										className="cardImage"
										src={`${'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'}${
											this.id
										}.png`}
										alt={this.id}
									/>
								</div>
								<div className="col-12 col-md-6 cardImageContainer">
									{this.state.data !== '' ? (
										<div className="p-4">
											<div>
												<h4 className="card-title"> Name :</h4>
												<p className="card-text text-capitalize">
													{this.state.data.name}
												</p>
											</div>
											<div>
												<h4 className="card-title">Types :</h4>

												<div className="card-text text-capitalize">
													<ul className="d-flex align-self-start flex-column mb-2">
														{this.state.data.types.map((item, i) => {
															return (
																<li className="text-capitalize" key={i}>
																	<img
																		className="d-inline-block icon"
																		src={`/icons/${item.type.name}.png`}
																		alt={item.type.name}
																	/>
																	<span className="d-inline-block">
																		{item.type.name}
																	</span>
																</li>
															);
														})}
													</ul>
												</div>
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
													<ul className="d-flex align-self-start flex-column">
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
										<div className="m-4">
											<div
												className="spinner-border text-warning spinner-lg"
												role="status"
											>
												<span className="sr-only">Loading...</span>
											</div>
										</div>
									)}
								</div>
							</div>

							<div
								className="btn-group mt-5 d-flex flex-row justify-content-center"
								role="group"
								aria-label=""
							>
								<a
									href={this.getPrevPageUrl()}
									className={`btn btn-secondary ${
										this.getPrevPageUrl() === 'null' ? 'disabled' : ''
									}`}
								>
									<i className="fa fa-arrow-circle-left" aria-hidden="true"></i>{' '}
									Prev
								</a>
								<a
									href={this.getNextPageUrl()}
									className={`btn btn-success ${
										this.getNextPageUrl() === 'null' ? 'disabled' : ''
									}`}
								>
									Next{' '}
									<i
										className="fa fa-arrow-circle-right"
										aria-hidden="true"
									></i>
								</a>
							</div>
						</main>
						<Footer />
					</>
				)}
			</>
		);
	}
}
export default Detail;
