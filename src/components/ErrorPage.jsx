import '../styles/components/errorPage.scss';
import React from 'react';

const ErrorPage = ({ logo, status, url }) => {
	return (
		<div className='error-page'>
			<div className='error-page__logo'>
				<img src={logo} alt="logo" />
			</div>
			<div className='error-page__status'>
				<span className='error-page__text-status'>{status}. </span>
				<span className='error-page__text-status error-page_silver-text'>That's an error.</span>
			</div>
			<div className="error-page__url">
				<span className="error-page__text-url">The requested URL {url} was not found on this server. </span>
				<span className="error-page__text-url error-page_silver-text">That's all we know.</span>
			</div>
		</div>
	);
};

export default ErrorPage;