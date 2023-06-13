import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import ImageDetailsPage from './ImageDetailsPage.jsx';
import './App.css';

export function App() {
	const [query, setQuery] = useState('');
	const [artSelection, setArtSelection] = useState('');
	const [showArtDetails, setShowArtDetails] = useState(false);

	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((json) => {
			setQuery(json.data);
			return json.data;
		});
	}

	function onArtSelection(artSelection) {
		setArtSelection(artSelection);
		setShowArtDetails(true);
	}

	const toggleDetails = () => {
		setShowArtDetails(false);
	};

	return (
		<div className="App">
			{showArtDetails ? (
				<ImageDetailsPage data={artSelection} showDetails={toggleDetails} />
			) : (
				<div>
					<h1>TCL Career Lab Art Finder</h1>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<ul>
						{query ? (
							query.map((query) => (
								<li key={query.image_id}>
									<button onClick={() => onArtSelection(query)}>
										{query.title} by {query.artist_title ?? 'Unknown Artist'}
									</button>
								</li>
							))
						) : (
							<span></span>
						)}
					</ul>
				</div>
			)}
			<Footer />
		</div>
	);
}
