import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
	const {type} = props;
	return (
		<a className={type === `footer` ? `logo logo--footer` : `logo`} href="#top">
			<span className="visually-hidden">Логотип Guitar-Shop</span>
		</a>
	)
}

Logo.propTypes = {
	type: PropTypes.string,
};

export default Logo;
