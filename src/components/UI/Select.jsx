import '../../styles/components/UI/uiElement.scss';

const Select = ({ children, listData, ...props }) => {
	return (
		<select {...props} className='ui-element'>
			{children}
			{
				listData.map((elem, index) =>
					<option key={index} value={elem}>{elem}</option>
				)
			}
		</select>
	);
};

export default Select;