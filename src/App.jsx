import './styles/common.scss';
import { useState } from 'react';
import CreatorPictures from './components/CreatorPictures';
import GalleryPictures from './components/GalleryPictures';
import TitleBlock from './components/TitleBlock';

const App = () => {
	const [picturesDoge, setPicturesDoge] = useState([]);

	return (
		<div className="container">
			<div className="gallery-app">

				<TitleBlock countPictures={picturesDoge.length} />

				<CreatorPictures setPicturesDoge={setPicturesDoge} />

				<GalleryPictures picturesDoge={picturesDoge} />

			</div>
		</div >
	);
}

export default App;
