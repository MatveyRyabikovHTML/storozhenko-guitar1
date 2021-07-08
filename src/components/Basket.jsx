import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withBasket} from '../hocs/with-basket';
import {guitars, typeOfGuitars} from '../mocks';

import Breadcrumbs from './Breadcrumbs';
import PopupBasket from './Popup-basket';

const Basket = ({basketGuitars, deleteGuitar, isPopupOpen, onPopupOpen, onPopupClose, onChangeGuitarAmount, promocodeInputRef, onApplyPromocodeClick, getFullPrice, selectedGuitar}) => {
	let allGuitarsCoast = 0;
	return (
		<div className="basket">
			<h2 className="basket__title">Корзина</h2>
			<Breadcrumbs path={[
				{
					name: `Главная`,
				},
				{
					name: `Каталог`,
					link: `/catalog`
				},
				{
					name: `Оформляем`,
				}
				]}
			/>
			<ul className="basket__goods">
				{
					Object.keys(basketGuitars).length === 0
						? 
							(<div className="center">
								<h3>У Вас в корзине пока нету товаров</h3>
								<p>Хотите ознакомиться с ассортиментом нашего магазина?</p>
								<Link className="basket__button-catalog" to="/catalog">Перейти в каталог товаров</Link>
							</div>)
						:
							Object.keys(basketGuitars).map((article, i) => {

								let currentGuitar = guitars.find((guitar) => 
									guitar.article === article
								);

								allGuitarsCoast = allGuitarsCoast + (currentGuitar.price * basketGuitars[currentGuitar.article]);

								return (
									<li key={i} className="basket__item">
										<button className="basket__item-button-cross" onClick={(evt) => {onPopupOpen(evt, currentGuitar)}}></button>
										<img className="basket__item-image" src={`./images/${currentGuitar.type}.png`} alt="Фотография экземпляра гитары" />
										<div className="basket__item-info">
											<h3 className="basket__item-title">{`${typeOfGuitars[currentGuitar.type]} ${currentGuitar.name}`}</h3>
											<p className="basket__item-text">{`Артикул: ${currentGuitar.article}`}</p>
											<p className="basket__item-text">{`${typeOfGuitars[currentGuitar.type]}, ${currentGuitar.strings} струнная `}</p>
										</div>
										<div className="basket__item-price">
											<p className="basket__item-price-one">{`${currentGuitar.price} ₽`}</p>
											<div className="basket__item-amount-controls">
												<button
													className="basket__button-amount-change basket__button-amount-change--down"
													onClick={(evt) => {
														basketGuitars[currentGuitar.article] === 1
															?
															onPopupOpen(evt, currentGuitar)
															:
															onChangeGuitarAmount(evt, currentGuitar.article , -1)
													}}
												>−</button>
												<p className="basket__item-amount">{basketGuitars[currentGuitar.article]}</p>
												<button
												className="basket__button-amount-change basket__button-amount-change--up"
												onClick={(evt) => {
													onChangeGuitarAmount(evt, currentGuitar.article , 1)
												}}
												>+</button>
											</div>
											<p className="basket__item-price-total">{`${+currentGuitar.price * basketGuitars[article]} ₽`}</p>
										</div>
									</li>
								)
							})
				}

			</ul>

			<div className="basket__total">
				<div className="basket__promocode">
					<p className="basket__promocode-title">Промокод на скидку</p>
					<p className="basket__promocode-info">Введите свой промокод, если он у вас есть.</p>
					<input ref={promocodeInputRef} className="basket__promocode-input" type="text" placeholder="GITARAHIT" />
					<button className="basket__promocode-button" type="button" onClick={onApplyPromocodeClick} >Применить купон</button>
				</div>
				<div className="basket__total-price">
					<p className="basket__total-price-amount">{`Всего: ${getFullPrice(allGuitarsCoast) < 0 ? 0 : getFullPrice(allGuitarsCoast)} ₽ `}</p>
					<button className="basket__total-price-submit" type="button">Оформить заказ</button>
				</div>
			</div>
			{
				isPopupOpen ? <PopupBasket guitar={selectedGuitar} onPopupClose={onPopupClose} deleteGuitar={deleteGuitar} /> : ``
			}
		</div>
		
	)
}

export default withBasket(Basket);
