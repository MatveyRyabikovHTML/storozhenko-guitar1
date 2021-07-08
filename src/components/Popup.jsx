import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {typeOfGuitars} from '../mocks';

const Popup = (props) => {
	const {guitar, isPopupSuccessOpen, onAddToBasketClick, onClosePopup} = props;
	return (
		<section className="popup__overlay" onClick={onClosePopup}>
			{
				!isPopupSuccessOpen && (
					<div className="popup popup--card" onClick={(evt) => {evt.stopPropagation()}}>
						<button className="popup__button-cross" onClick={onClosePopup}></button>
						<p className="popup__title">Добавить товар в корзину</p>

						<img className="popup__guitar-img" src={`./images/${guitar.type}.png`} alt="Фотография гитары" />
						
						<div className="popup__guitar-info">
							<p className="popup__guitar-title">{guitar.name}</p>
							<p className="popup__guitar-article">{`Артикул: ${guitar.article}`}</p>
							<p className="popup__guitar-strings">{`${typeOfGuitars[guitar.type]}, ${guitar.strings} струнная`}</p>
							<p className="popup__guitar-price">{`Цена: ${guitar.price} ₽`}</p>
						</div>

						<button className="popup__button-add" type="button" onClick={(evt) => {onAddToBasketClick(evt, guitar.article)}}>Добавить в корзину</button>
					</div>
				)
			}
			{isPopupSuccessOpen && (
				<div className="popup popup--success" onClick={(evt) => {evt.stopPropagation()}}>
					<button className="popup__button-cross" onClick={onClosePopup}></button>
					<p className="popup__title">Товар успешно добавлен в корзину</p>
					<div className="popup__buttons-container">
						<Link className="popup__basket-link" to="/basket" onClick={(evt) => {onClosePopup(evt, false)}}>Перейти в корзину</Link>
						<Link className="popup__resume-shopping" to="/catalog" onClick={onClosePopup} >Продолжить покупки</Link>
					</div>
				</div>
			)}
		</section>
	)
}

Popup.propTypes = {
	guitar: PropTypes.object.isRequired,
	onClosePopup: PropTypes.func.isRequired,
	onAddToBasketClick: PropTypes.func.isRequired,
	isPopupSuccessOpen: PropTypes.bool.isRequired,
};

export default Popup;
