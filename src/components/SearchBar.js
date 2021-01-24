import React, { Component } from 'react';

import { FaSearch } from 'react-icons/fa';

export default class SearchBar extends Component {
	render() {
		return (
			<div className="container m-2 mx-auto">
				<div className="input-group">
					<input
						type="search"
						className="form-control rounded rounded-pill"
						name="searchPokemon"
						placeholder="Enter search tags..."
					/>
					<div className="input-group-append">
						<button className="btn btn-default">
							<FaSearch />
						</button>
					</div>
				</div>
			</div>
		);
	}
}
