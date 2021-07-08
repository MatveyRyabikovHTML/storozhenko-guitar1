import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import Logo from './Logo';

const Header = ({guitars}) => {

	let items = 0;

	Object.keys(guitars).map((item) => {
		items += +guitars[item];
	})

	return (
		<header className="header">
			<h1 className="visually-hidden">Guitar-Shop. Гитары на любой вкус!</h1>
			<section className="header__menu center">

				<Logo />

				<nav className="navigation">
					<ul className="navigation__list">
						<li className="navigation__item">
							<Link className="navigation__link" to="/catalog">Каталог</Link>
						</li>
						<li className="navigation__item">
							<a className="navigation__link" href="#top">Где купить?</a>
						</li>
						<li className="navigation__item">
							<a className="navigation__link" href="#top">О компании</a>
						</li>
						<li className="navigation__item">
							<a className="navigation__link" href="#top">Cервис-центры</a>
						</li>
					</ul>
				</nav>

				<ul className="user-menu">
					<li className="user-menu__item">
						<a className="user-menu__link" href="#top" aria-label="Карта">
							<span className="user-menu__link-icon user-menu__link-icon--map"></span>
						</a>
					</li>
					<li className="user-menu__item">
						<a className="user-menu__link" href="#top" aria-label="Поиск">
							<span className="user-menu__link-icon user-menu__link-icon--search"></span>
						</a>
					</li>
					<li className="user-menu__item user-menu__item--basket">
						<Link className="user-menu__link" to="/basket" aria-label="Корзина">
							<span className="user-menu__link-icon user-menu__link-icon--basket"></span>
						</Link>
						<small
						className="user-menu__goods">
							{+items === 0 ? `` : items}
						</small>
					</li>
				</ul>

			</section>
		</header>
	)
}

Header.propTypes = {
	guitars: PropTypes.object.isRequired,
};

const mapStateToProps = ({guitars}) => ({
	guitars,
});

export default connect(mapStateToProps, )(Header);

