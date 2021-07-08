import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
	const {onGuitarsFilterMinPriceChange, onGuitarsFilterMaxPriceChange, onFilterMinPriceBlur, onFilterMaxPriceBlur, filterMinPrice, filterMaxPrice, onFilterTypeSelect, onFilterStringsSelect, availableStrings} = props;
	return (
		<ul className="filter">
			<li className="filter__item">
				<h3 className="filter__title">Фильтр</h3>
			</li>
			<li className="filter__item">
				<h4 className="filter__type-title">Цена, ₽</h4>
				<div className="filter__price">
					<input className="filter__price-input filter__price-input--min" value={filterMinPrice} name="min" type="number" required onChange={onGuitarsFilterMinPriceChange} onBlur={onFilterMinPriceBlur} />
					<input className="filter__price-input filter__price-input--max" value={filterMaxPrice} name="max" type="number" required onChange={onGuitarsFilterMaxPriceChange} onBlur={onFilterMaxPriceBlur} />
				</div>
			</li>
			<li className="filter__item">
				<h4 className="filter__type-title">Тип гитар</h4>

				<ul className="filter__guitar-types">

					<li>
						<label>
							<input
								className="filter__checkbox-input visually-hidden"
								value="acoustic"
								type="checkbox"
								name="guitar-type"
								onChange={onFilterTypeSelect}
							/>
							<p className="filter__checkbox">Акустические гитары</p>
						</label>
					</li>

					<li>
						<label>
							<input
								className="filter__checkbox-input visually-hidden"
								value="electro"
								type="checkbox"
								name="guitar-type"
								onChange={onFilterTypeSelect}
							/>
							<p className="filter__checkbox">Электрогитары</p>
						</label>
					</li>

					<li>
						<label>
							<input
								className="filter__checkbox-input visually-hidden"
								value="ukulele"
								type="checkbox"
								name="guitar-type"
								onChange={onFilterTypeSelect}
							/>
							<p className="filter__checkbox">Укулеле</p>
						</label>
					</li>

				</ul>
			</li>
			<li className="filter__item">
				<ul className="filter__strings">
					<h4 className="filter__type-title">Количество струн</h4>

					<li>
						<label>
							<input
								disabled={availableStrings.has(`4`) ? `` : `disabled`}
								className="filter__checkbox-input visually-hidden"
								type="checkbox"
								name="guitar-strings"
								value="4"
								onChange={onFilterStringsSelect}
							/>
							<p className="filter__checkbox">4</p>
						</label>
					</li>

					<li>
						<label>
							<input
								disabled={availableStrings.has(`6`) ? `` : `disabled`}
								className="filter__checkbox-input visually-hidden"
								type="checkbox"
								name="guitar-strings"
								value="6"
								onChange={onFilterStringsSelect}
							/>
							<p className="filter__checkbox">6</p>
						</label>
					</li>

					<li>
						<label>
							<input
								disabled={availableStrings.has(`7`) ? `` : `disabled`}
								className="filter__checkbox-input visually-hidden"
								type="checkbox"
								name="guitar-strings"
								value="7"
								onChange={onFilterStringsSelect}
							/>
							<p className="filter__checkbox">7</p>
						</label>
					</li>

					<li>
						<label>
							<input
								disabled={availableStrings.has(`12`) ? `` : `disabled`}
								className="filter__checkbox-input visually-hidden"
								type="checkbox"
								name="guitar-strings"
								value="12"
								onChange={onFilterStringsSelect}
							/>
							<p className="filter__checkbox">12</p>
						</label>
					</li>

				</ul>
			</li>
		</ul>
	)
};

Filter.propTypes = {
	onGuitarsFilterMinPriceChange: PropTypes.func.isRequired,
	onGuitarsFilterMaxPriceChange: PropTypes.func.isRequired,
	onFilterMinPriceBlur: PropTypes.func.isRequired,
	onFilterMaxPriceBlur: PropTypes.func.isRequired,
	filterMinPrice: PropTypes.string.isRequired,
	filterMaxPrice: PropTypes.string.isRequired,
	onFilterTypeSelect: PropTypes.func.isRequired,
	onFilterStringsSelect: PropTypes.func.isRequired,
	availableStrings: PropTypes.object.isRequired,
};

export default Filter;

