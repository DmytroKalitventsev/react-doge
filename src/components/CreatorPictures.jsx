import { useEffect, useState } from 'react';
import { apiDoge } from '../API';
import '../styles/components/creatorPictures.scss';

const CreatorPictures = ({ getUrlPictures }) => {
	const [valSelectBreed, setValSelectBreed] = useState('random');
	const [valSelectSubBreed, setValSelectSubBreed] = useState('random');
	const [listBreeds, setListBreeds] = useState([]);
	const [listSubBreeds, setListSubBreeds] = useState([]);
	const [countImg, setCountImg] = useState(1);

	const getListBreeds = url => {
		return fetch(url)
			.then(response => response.json())
			.then(json => setListBreeds(json.message));
	}

	const getListSubBreeds = url => {
		return fetch(url)
			.then(response => response.json())
			.then(json => setListSubBreeds(json.message));
	}

	const changePictures = (e) => {
		e.preventDefault();

		const subBreed = valSelectSubBreed === 'random'
			? ''
			: `/${valSelectSubBreed}`;

		const breed = valSelectBreed === 'random'
			? 'breeds/image'
			: `breed/${valSelectBreed}${subBreed}/images`;

		getUrlPictures(`${apiDoge}/${breed}/random/${countImg}`);
	}

	useEffect(() => {
		getUrlPictures(`${apiDoge}/breeds/image/random/1`);
		getListBreeds(`${apiDoge}/breeds/list/all`);
	}, []);

	useEffect(() => {
		setValSelectSubBreed('random');

		if (valSelectBreed === 'random') {
			setListSubBreeds([]);
			return;
		};

		getListSubBreeds(`${apiDoge}/breed/${valSelectBreed}/list`);
	}, [valSelectBreed]);

	return (
		<form onSubmit={changePictures} className='creator-pictures'>
			<button className='creator-pictures__element'>Generate img</button>
			<select
				onChange={e => setValSelectBreed(e.target.value)}
				value={valSelectBreed}
				className='creator-pictures__element'
			>
				<option value="random">Random breed</option>
				{
					Object.keys(listBreeds).map((breed, index) =>
						<option key={index} value={breed}>{breed}</option>
					)
				}
			</select>
			<select
				onChange={e => setValSelectSubBreed(e.target.value)}
				value={valSelectSubBreed}
				className='creator-pictures__element'
			>
				{
					listSubBreeds.length
						?
						<option value="random">Random sub-breed</option>
						:
						<option value="random">sub-breeds not found</option>
				}
				{
					listSubBreeds.map((subBreed, index) =>
						<option key={index} value={subBreed} > {subBreed}</option>
					)
				}
			</select>
			<input
				onChange={e => setCountImg(e.target.value)}
				value={countImg}
				className='creator-pictures__element creator-pictures__element_count'
				type="number"
				name="countPictures"
				placeholder='Count img from 1 to 50'
				pattern='\d*'
				min='1'
				max='50'
				required
			/>
		</form>
	);
};

export default CreatorPictures;