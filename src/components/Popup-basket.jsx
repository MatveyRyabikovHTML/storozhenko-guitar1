import React from 'react';
import PropTypes from 'prop-types';
import {typeOfGuitars} from '../mocks';

const PopupBasket = ({guitar, onPopupClose, deleteGuitar}) => {
	return (
		<section className="popup-basket__overlay" onClick={onPopupClose}>
			<div className="popup-basket" onClick={(evt) => {evt.stopPropagation()}}>
				<button className="popup-basket__button-cross" onClick={onPopupClose}></button>
				<p className="popup-basket__title">Удалить этот товар? </p>

				<img className="popup-basket__guitar-img" src={`./images/${guitar.type}.png`} alt="Фотография гитары" />
				
				<div className="popup-basket__guitar-info">
					<p className="popup-basket__guitar-title">{`Гитара ${guitar.name}`}</p>
					<p className="popup-basket__guitar-article">{`Артикул: ${guitar.article}`}</p>
					<p className="popup-basket__guitar-strings">{`${typeOfGuitars[guitar.type]}, ${guitar.strings} струнная`}</p>
					<p className="popup-basket__guitar-price">{`Цена: ${guitar.price} ₽`}</p>
				</div>

				<div className="popup-basket__controls">
					<button
					className="popup-basket__button-delete"
					type="button"
					onClick={(evt) => {
						deleteGuitar(guitar.article);
						onPopupClose(evt);
					}}>
						Удалить товар
					</button>
					<button className="popup-basket__button-resume" type="button" onClick={onPopupClose}>Продолжить покупки</button>
				</div>

			</div>
		</section>
	)
}

PopupBasket.propTypes = {
	guitar: PropTypes.object.isRequired,
	onPopupClose: PropTypes.func.isRequired,
	deleteGuitar: PropTypes.func.isRequired,
};

export default PopupBasket;
