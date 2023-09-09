import '../../styles/components/UI/uiElement.scss';

const Input = ({...props}) => {
	return (
		<input
			{...props}
			className='ui-element ui-element_count'
			type="number"
			name="countPictures"
			placeholder='Count img from 1 to 50'
			pattern='\d*'
			min='1'
			max='50'
			required
		/>
	);
};

export default Input;