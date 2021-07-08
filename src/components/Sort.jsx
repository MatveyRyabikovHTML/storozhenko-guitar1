import React from 'react';
import PropTypes from 'prop-types';

const Sort = (props) => {
	const {onGuitarsSortChange, onGuitarsSortDirectionChange, sortType, sortDirection} = props;
	return (
		<div className="sort">
			<div className="sort__type">
				<p className="sort__type-title">Сортировать:</p>
				<label>
					<p className={`sort__type-option${sortType === `price` ? ` sort__type-option--active` : ``}`}>по цене</p>
					<input className="visually-hidden" value="price" type="radio" name="sort-type" onChange={onGuitarsSortChange} />
				</label>
				<label>
					<p className={`sort__type-option${sortType === `reviews` ? ` sort__type-option--active` : ``}`}>по популярности</p>
					<input className="visually-hidden" value="reviews" type="radio" name="sort-type" onChange={onGuitarsSortChange} />
				</label>
			</div>
			<div className="sort__direction">
				<label className={`sort__direction-arrow sort__direction-arrow--up${sortDirection === `up` ? ` sort__direction-arrow--active` : ``}`}>
					<input className="visually-hidden" value="up" type="radio" name="sort-type" onChange={onGuitarsSortDirectionChange} />
				</label>
				<label className={`sort__direction-arrow${sortDirection === `down` ? ` sort__direction-arrow--active` : ``}`}>
					<input className="visually-hidden" value="down" type="radio" name="sort-type" onChange={onGuitarsSortDirectionChange} />
				</label>
			</div>
		</div>
	)
}

Sort.propTypes = {
	onGuitarsSortChange: PropTypes.func.isRequired,
	onGuitarsSortDirectionChange: PropTypes.func.isRequired,
	sortType: PropTypes.string.isRequired,
	sortDirection: PropTypes.string.isRequired,
};

export default Sort;
