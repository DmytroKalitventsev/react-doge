import '../styles/components/creatorPictures.scss';
import { useEffect, useState } from 'react';
import { apiDoge } from '../API';
import Select from './UI/Select';
import Button from './UI/Button';
import Input from './UI/Input';

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
			<Button text={'Generate img'} />

			<Select
				listData={Object.keys(listBreeds)}
				onChange={e => setValSelectBreed(e.target.value)}
				value={valSelectBreed}
			>
				<option value="random">Random breed</option>
			</Select>

			<Select
				listData={listSubBreeds}
				onChange={e => setValSelectSubBreed(e.target.value)}
				value={valSelectSubBreed}
			>
				{
					listSubBreeds.length
						?
						<option value="random">Random sub-breed</option>
						:
						<option value="random">sub-breeds not found</option>
				}
			</Select>

			<Input
				onChange={e => setCountImg(e.target.value)}
				value={countImg}
			/>
		</form>
	);
};

export default CreatorPictures;