import './styles/common.scss';
import { useState } from 'react';
import CreatorPictures from './components/CreatorPictures';
import GalleryPictures from './components/GalleryPictures';
import TitleBlock from './components/TitleBlock';
import ErrorPage from './components/ErrorPage';
import logo from './images/dog-api-logo.svg';

const App = () => {
	const [picturesDoge, setPicturesDoge] = useState([]);
	const [isValidApi, setIsValidApi] = useState({
		ok: true,
		status: null,
		url: ''
	});

	const { ok: responseApi, status: connectionStatus, url: urlToConnect } = isValidApi;

	const getUrlPictures = url => {
		return fetch(url)
			.then(response => {
				const { ok, status, url } = response;

				if (!response.ok) {
					setIsValidApi({ ...isValidApi, ok, status, url });
					throw new Error(`API returned a status code of ${status}`);
				}

				return response.json();
			})
			.then(json => setPicturesDoge(json.message))
			.catch(error => console.error(error));
	}

	return (
		<div className="container">
			{
				responseApi
					?
					<div className="gallery-app">
						<TitleBlock logo={logo} countPictures={picturesDoge.length} />

						<CreatorPictures getUrlPictures={getUrlPictures} />

						<GalleryPictures picturesDoge={picturesDoge} />
					</div>
					:
					<ErrorPage logo={logo} status={connectionStatus} url={urlToConnect} />
			}
		</div >
	);
}

export default App;
