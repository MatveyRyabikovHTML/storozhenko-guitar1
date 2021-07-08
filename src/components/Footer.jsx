import React from 'react';

import Logo from './Logo';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__wrapper center">

				<div className="social">
					<Logo type={`footer`}/>
					<ul className="social__list">
						<li className="social__item">
							<a href="#top" className="social__link social__link--facebook"><span className="visually-hidden">Фейсбук</span></a>
						</li>
						<li className="social__item">
							<a href="#top" className="social__link social__link--instagram"><span className="visually-hidden">Инстуграм</span></a>
						</li>
						<li className="social__item">
							<a href="#top" className="social__link social__link--twitter"><span className="visually-hidden">Твиттер</span></a>
						</li>
					</ul>
				</div>

				<ul className="footer-menu">

					<li className="footer-menu__item">
						<h4 className="footer-menu__title">О нас</h4>
						<p className="footer-menu__text">
							Магазин гитар,
							музыкальных инструментов
							и гитарная мастерская в
							Санкт-Петербурге.
						</p>
						<p className="footer-menu__text">
							Все инструменты
							проверены, отстроены и
							доведены до идеала!
						</p>
					</li>

					<li className="footer-menu__item">
						<h4 className="footer-menu__title">Каталог</h4>
						<ul className="footer-menu__goods-list">
							<li className="footer-menu__good-item">
								<a className="footer-menu__good-link" href="#top">Акустические гитары</a>
							</li>
							<li className="footer-menu__good-item">
								<a className="footer-menu__good-link" href="#top">Классические гитары</a>
							</li>
							<li className="footer-menu__good-item">
								<a className="footer-menu__good-link" href="#top">Электрогитары</a>
							</li>
							<li className="footer-menu__good-item">
								<a className="footer-menu__good-link" href="#top">Бас-гитары</a>
							</li>
							<li className="footer-menu__good-item">
								<a className="footer-menu__good-link" href="#top">Укулеле</a>
							</li>
						</ul>
					</li>

					<li className="footer-menu__item footer-menu__item--info">
						<h4 className="footer-menu__title">Информация</h4>
						<ul className="footer-menu__info-list">
							<li className="footer-menu__info-item">
								<a className="footer-menu__info-link" href="#top">Где купить?</a>
							</li>
							<li className="footer-menu__info-item">
								<a className="footer-menu__info-link" href="#top">Блог</a>
							</li>
							<li className="footer-menu__info-item">
								<a className="footer-menu__info-link" href="#top">Вопрос - ответ</a>
							</li>
							<li className="footer-menu__info-item">
								<a className="footer-menu__info-link" href="#top">Возврат</a>
							</li>
							<li className="footer-menu__info-item">
								<a className="footer-menu__info-link" href="#top">Сервис-центры</a>
							</li>
						</ul>
					</li>

					<li className="footer-menu__item footer-menu__item--contacts">
						<h4 className="footer-menu__title footer-menu__title--contacts">Контакты</h4>
						<p className="footer-menu__contacts-text">
							г. Санкт-Петербург,<br></br>
							м. Невский проспект,<br></br>
							ул. Казанская 6. <br></br>
							<span className="footer-menu__text-icon footer-menu__text-icon--phone">8-812-500-50-50</span>
						</p>
						<p className="footer-menu__contacts-text">
							Режим работы:<br></br>
							<span className="footer-menu__text-icon footer-menu__text-icon--watch">с 11:00 до 20:00,</span><br></br>
							без выходных.
						</p>
					</li>

				</ul>
			</div>
		</footer>
	)
}

export default Footer;

