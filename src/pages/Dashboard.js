import React from 'react';
import PokemonCard from '../components/Card/PokemonCard';
import Header from '../components/Header';
import Footer from '../components/Footer'

class Dashboard extends React.Component {
	state = { data: [] };
	componentDidMount() {
		this.fetchPokemon();
	}
	fetchPokemon = () => {
		const url = 'https://pokeapi.co/api/v2/pokemon/?limit=40';
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
				const newData = originalData.results.map((item) => {
					return {
						...item,
						id: this.extractIdFromVal(item.url),
					};
				});
				this.setState({ data: newData });
			})

			.catch((error) => {
				console.log(error);
			});
	};

	extractIdFromVal = (url) => {
		const arrSet = url.split('/');
		return arrSet[6];
	};

	onPokemonCardClick = (id) => {
		this.props.history.push('/detail/' + id);
	};

	render() {
		console.log(this.state);
		return (
			<>
				<Header></Header>
				<div className="container-fluid">
					<div className="poke_List row justify-content-md-center">
						{this.state.data.map((item) => {
							return (
								<PokemonCard
									name={item.name}
									id={item.id}
									onClick={this.onPokemonCardClick}
									key={item.id}
								/>
							);
						})}
					</div>
				</div>
                <Footer></Footer>
			</>
		);
	}
}
export default Dashboard;
