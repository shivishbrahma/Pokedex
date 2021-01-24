import { Component } from 'react';
import PokemonCard from '../components/Card/PokemonCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [], total: 0, pagnav: [] };

		this.state.pgno = isNaN(props.match.params.pgno)
			? 0
			: props.match.params.pgno;
	}

	async componentOnChange() {
		document.title = 'Pokedex';
		this.setState({
			...this.state,
			pgno: isNaN(this.props.match.params.pgno)
				? 0
				: this.props.match.params.pgno,
		});

		let i = Math.max(0, this.state.pgno - 2);
		let high = parseInt(this.state.pgno) + 2;
		if (high < 5) high = 4;
		const pagnav = [];
		while (i <= high) {
			pagnav.push(
				<li
					className={`page-item ${
						i === parseInt(this.state.pgno) ? 'active' : ''
					}`}
					key={i}
				>
					<Link className="page-link" to={`/pg/${i}`}>
						{i + 1}
					</Link>
				</li>
			);
			i++;
			if (i >= 1116 / 20) break;
		}
		this.setState({ ...this.state, pagnav });
		await this.fetchPokemonList();
	}

	async componentDidMount() {
		await this.componentOnChange();
	}

	async componentDidUpdate(prevProps) {
		if (prevProps.match.params.pgno !== this.props.match.params.pgno) {
			const { pgno } = this.props.match.params;
			this.setState({ ...this.state, pgno }, async () => {
				await this.componentOnChange();
			});
		}
	}

	getNextPageUrl() {
		if (parseInt(this.state.pgno) >= parseInt(1116 / 20)) return 'null';
		return `/pg/${parseInt(this.state.pgno) + 1}`;
	}
	getPrevPageUrl() {
		if (parseInt(this.state.pgno) <= 0) return 'null';
		return `/pg/${parseInt(this.state.pgno) - 1}`;
	}

	fetchPokemonList = async () => {
		try {
			const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${
				this.state.pgno * 20
			}`;
			const configuration = {
				method: 'GET',
				headers: { 'accept-type': 'application/json' },
			};
			const response = await fetch(url, configuration);
			const originalData = await response.json();
			this.state.total = originalData.count;
			const newData = originalData.results.map((item) => {
				return {
					...item,
					id: this.extractIdFromVal(item.url),
				};
			});
			this.setState({ ...this.state, data: newData });
		} catch (err) {
			console.error(err);
		}
	};

	extractIdFromVal = (url) => {
		const arrSet = url.split('/');
		return arrSet[6];
	};

	onPokemonCardClick = (id) => {
		this.props.history.push('/detail/' + id);
	};

	render() {
		return (
			<>
				<Header></Header>
				<SearchBar />
				<main className="container-fluid">
					{this.state.data.length !== 0 ? (
						<>
							<div className="poke_List row justify-content-center">
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

							<nav aria-label="Page navigation" className="mt-4">
								<ul className="pagination pagination-lg justify-content-center">
									<li
										className={`page-item ${
											this.getPrevPageUrl() === 'null' ? 'disabled' : ''
										}`}
									>
										<Link
											className="page-link"
											to={this.getPrevPageUrl()}
											aria-label="Previous"
										>
											<span aria-hidden="true">&laquo;</span>
											<span className="sr-only">Previous</span>
										</Link>
									</li>
									{this.state.pagnav}
									<li
										className={`page-item ${
											this.getNextPageUrl() === 'null' ? 'disabled' : ''
										}`}
									>
										<Link
											className="page-link"
											to={this.getNextPageUrl()}
											aria-label="Next"
										>
											<span aria-hidden="true">&raquo;</span>
											<span className="sr-only">Next</span>
										</Link>
									</li>
								</ul>
							</nav>
						</>
					) : (
						<div className="m-4 text-center align-middle">
							<div
								className="spinner-border text-warning spinner-lg"
								role="status"
							>
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					)}
				</main>
				<Footer></Footer>
			</>
		);
	}
}
export default Dashboard;
