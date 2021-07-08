import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Breadcrumbs = ({path}) => {
	return (
		<ol className="breadcrumbs">
			{path.map((point, i) => {
				if (point.link !== undefined) {
					return (
						<li key={i} className="breadcrumbs__item">
							<Link className="breadcrumbs__link" to={point.link}>{point.name}</Link>
						</li>
					)
				} else {
					return (
						<li key={i} className="breadcrumbs__item">
							<a className="breadcrumbs__link" href={`#top`}>{point.name}</a>
						</li>
					)
				}
			})}
		</ol>
	)
}


Breadcrumbs.propTypes = {
	path: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		link: PropTypes.string,
	})).isRequired,
};

export default Breadcrumbs;
