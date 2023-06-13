import './ImageDetailsPage.css';
function ImageDetailsPage({ data, showDetails }) {
	const { image_id, title, artist_title, thumbnail } = data;

	return (
		<section>
			<div className="image-details">
				<h2>
					{title} by {artist_title ?? 'Unknown Artist'}
				</h2>
				<button
					onClick={() => {
						console.log(showDetails);
						showDetails(false);
					}}
				>
					Back
				</button>
			</div>
			<img
				alt={thumbnail.alt_text}
				src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
			/>
		</section>
	);
}

export default ImageDetailsPage;
