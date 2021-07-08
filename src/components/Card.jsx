import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
	const {guitar, onPopupOpenClick} = props;
	return (
		<li className="card">
			<img className="card__img" src={`./images/${guitar.type}.png`} alt={`Фотография ${guitar.name}`} />
			<div className="card__rating">
				<ol className="card__stars-rating">
					<li className="card__star"></li>
					<li className="card__star"></li>
					<li className="card__star"></li>
					<li className="card__star"></li>
					<li className="card__star card__star--off"></li>
				</ol>
				<p className="card__reviews">{guitar.reviews}</p>
			</div>
			<div className="card__info">
				<p className="card__info-text">{guitar.name}</p>
				<p className="card__info-text">{`${guitar.price} ₽`}</p>
			</div>
			<div className="card__options">
				<a href="#top" className="card__button" type="button">Подробнее</a>
				<button className="card__button card__button--cart" type="button" onClick={onPopupOpenClick}> Купить</button>
			</div>
		</li>
	)
}

Card.propTypes = {
	guitar: PropTypes.object.isRequired,
	onPopupOpenClick: PropTypes.func.isRequired,
};

export default Card;
