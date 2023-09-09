import '../styles/components/galleryPictures.scss';
import imgNotFound from '../images/not-found.jpeg';

const GalleryPictures = ({ picturesDoge }) => {
	return (
		<div className="gallery-pictures">
			{
				picturesDoge.map((url, index) =>
					<div key={index} className="gallery-pictures__img">
						<img
							src={url}
							alt={index}
							onError={e => e.target.src = imgNotFound}
						/>
					</div>
				)
			}
		</div>
	);
};

export default GalleryPictures;