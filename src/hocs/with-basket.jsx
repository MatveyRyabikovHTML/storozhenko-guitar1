import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {extend} from '../utils';
import {addGuitarAction, deleteGuitarAction, changeGuitarAmountAction} from '../store/actions';

export const withBasket = (Component) => {
	class WithBasket extends PureComponent {
		constructor(props) {
			super(props);

			this.state = {
				isPopupOpen: false,
				promocode: ``,
				selectedGuitar: ``,
			}

			this.promocodeInputRef = React.createRef();

			this.addGuitar = this.addGuitar.bind(this);
			this.deleteGuitar = this.deleteGuitar.bind(this);

			this.onPopupOpen = this.onPopupOpen.bind(this);
			this.onPopupClose = this.onPopupClose.bind(this);
			this.onClosePopupKeydown = this.onClosePopupKeydown.bind(this);
			this.onChangeGuitarAmount = this.onChangeGuitarAmount.bind(this);
			this.onApplyPromocodeClick = this.onApplyPromocodeClick.bind(this);
			this.getFullPrice = this.getFullPrice.bind(this);
		}

		onPopupOpen(evt, guitar) {
			evt.preventDefault();
			document.addEventListener(`keydown`, this.onClosePopupKeydown);
			document.documentElement.style.overflow = `hidden`;
			this.setState(extend(this.state, {
				isPopupOpen: true,
				selectedGuitar: guitar,
			}))
		}

		onPopupClose(evt) {
			evt.preventDefault();
			document.removeEventListener(`keydown`, this.onClosePopupKeydown);
			document.documentElement.style.overflow = `auto`;
			this.setState(extend(this.state, {
				isPopupOpen: false,
			}))
		}

		
		onClosePopupKeydown(evt) {
			document.removeEventListener(`keydown`, this.onClosePopupKeydown);
			document.documentElement.style.overflow = `auto`;

			if (evt.key === `Escape`) {
				this.setState({
					isPopupOpen: false,
				})
			}
		}

		addGuitar(guitar) {
			this.props.addGuitar(guitar);
		}
		
		deleteGuitar(article) {
			this.props.deleteGuitar(article);
		}
		
		onChangeGuitarAmount(evt, article, direction) {
			this.props.changeGuitarAmount(article, direction);
		}

		onApplyPromocodeClick() {
			this.setState({promocode: this.promocodeInputRef.current.value});
			this.promocodeInputRef.current.parentNode.classList.remove(`basket__promocode--fail`);
		}

		getFullPrice(price) {
			switch(this.state.promocode) {
				case ``:
					return +price;
					break;

				case `GITARAHIT`:
					return 0.9 * +price;
					break;

				case `SUPERGITARA`:
					return +price - 700;
					break;

				case `GITARA2020`:
					return +price * 0.3 < 3500 ? +price - (+price * 0.3) : +price - 3500;
					break;

				default:
					if (this.promocodeInputRef.current !== null) {
						this.promocodeInputRef.current.parentNode.classList.add(`basket__promocode--fail`)
						this.promocodeInputRef.current.value = ``;
						this.promocodeInputRef.current.focus();
					}
					return +price;
			}
		}

		render() {
			return(
				<Component 
					isPopupOpen={this.state.isPopupOpen}
					addGuitar={this.addGuitar}
					deleteGuitar={this.deleteGuitar}
					basketGuitars={this.props.guitars}
					selectedGuitar={this.state.selectedGuitar}

					onPopupOpen={this.onPopupOpen}
					onPopupClose={this.onPopupClose}
					onChangeGuitarAmount={this.onChangeGuitarAmount}
					onApplyPromocodeClick={this.onApplyPromocodeClick}
					getFullPrice={this.getFullPrice}

					promocodeInputRef={this.promocodeInputRef}
				/>
			);
		}
	}

WithBasket.propTypes = {
	addGuitar: PropTypes.func.isRequired,
	changeGuitarAmount: PropTypes.func.isRequired,
	deleteGuitar: PropTypes.func.isRequired,
	guitars: PropTypes.object.isRequired,
};

	const mapStateToProps = ({guitars}) => ({
		guitars,
	});

	const mapDispatchToProps = (dispatch) => ({
		addGuitar(guitar) {
			dispatch(addGuitarAction(guitar));
		},
		deleteGuitar(guitar) {
			dispatch(deleteGuitarAction(guitar));
		},
		changeGuitarAmount(article, direction) {
			dispatch(changeGuitarAmountAction(article, direction));
		},
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithBasket);
};
