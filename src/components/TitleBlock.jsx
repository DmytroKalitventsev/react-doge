import '../styles/components/titleBlock.scss';

const TitleBlock = ({ countPictures }) => {
	return (
		<div className='title-block'>
			<h1 className='title-block__title'>Gallery Doge</h1>
			<span className='title-block__num-images'>Found {countPictures} images</span>
		</div>
	);
};

export default TitleBlock;