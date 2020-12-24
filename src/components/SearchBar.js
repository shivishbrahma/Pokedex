import React, { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		return (
			<div className="container m-2">
				<div className="input-group mx-auto">
					<input
						type="search"
						class="form-control rounded rounded-pill"
						name="searchPokemon"
						placeholder="Enter search tags..."
					/>
					<div className="input-group-append">
						<button className="btn btn-default">
							<i class="fa fa-search" aria-hidden="true"></i>
						</button>
					</div>
				</div>
			</div>
		);
	}
}
