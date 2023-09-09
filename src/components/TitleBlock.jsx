import '../styles/components/titleBlock.scss';


const TitleBlock = ({ logo, countPictures }) => {
	return (
		<div className='title-block'>
			<div className='title-block__logo'>
				<img src={logo} alt="logo" />
			</div>
			<h1 className='title-block__title'>Gallery Doge</h1>
			<span className='title-block__num-images'>Found {countPictures} images</span>
		</div>
	);
};

export default TitleBlock;