import React from 'react';
import PropTypes from 'prop-types';
import {withCatalog} from '../hocs/with-catalog';

import Breadcrumbs from './Breadcrumbs';
import Card from './Card';
import Filter from './Filter';
import Sort from './Sort';
import Pagination from './Pagination';
import Popup from './Popup';


const Catalog = (props) => {
	const {guitarsToView, filteredGuitars, page, onPageChange, minPrice, maxPrice, onGuitarsSortChange, onGuitarsSortDirectionChange, sortType, sortDirection, onGuitarsFilterMinPriceChange, onGuitarsFilterMaxPriceChange, filterMinPrice, filterMaxPrice, onFilterMinPriceBlur, onFilterMaxPriceBlur, onFilterTypeSelect, onFilterStringsSelect, filterType, filterStrings, availableStrings, isPopupOpen, isPopupSuccessOpen, selectedGuitar, onPopupOpenClick, onAddToBasketClick, onClosePopup} = props;
	return (
		<div className="catalog">
			<h2 className="main__title">Каталог гитар</h2>
			<Breadcrumbs path={[
				{
					name: `Главная`,
				},
				{
					name: `Каталог`,
				}
				]}
			/>

			<Filter minPrice={minPrice} maxPrice={maxPrice} onGuitarsFilterMinPriceChange={onGuitarsFilterMinPriceChange} onGuitarsFilterMaxPriceChange={onGuitarsFilterMaxPriceChange} filterMinPrice={filterMinPrice} filterMaxPrice={filterMaxPrice} onFilterMinPriceBlur={onFilterMinPriceBlur} onFilterMaxPriceBlur={onFilterMaxPriceBlur} onFilterTypeSelect={onFilterTypeSelect} onFilterStringsSelect={onFilterStringsSelect} filterType={filterType} filterStrings={filterStrings} availableStrings={availableStrings} />

			<section className="goods">
				<Sort onGuitarsSortChange={onGuitarsSortChange} onGuitarsSortDirectionChange={onGuitarsSortDirectionChange} sortType={sortType} sortDirection={sortDirection} />

				<ul className="goods__list">
					{
						guitarsToView.map((guitar, i) => {
							return <Card guitar={guitar} key={i} isPopupOpen={isPopupOpen} onPopupOpenClick={(evt) => onPopupOpenClick(evt, guitar)} />
						})
					}
				</ul>

				<Pagination guitars={filteredGuitars} page={page} onPageChange={onPageChange} />

			</section>
			{isPopupOpen && (
				<Popup guitar={selectedGuitar} isPopupOpen={isPopupOpen} isPopupSuccessOpen={isPopupSuccessOpen} onAddToBasketClick={onAddToBasketClick} onClosePopup={onClosePopup} />
			)
			}
		</div>
	)
}

Catalog.propTypes = {
	guitarsToView: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			strings: PropTypes.number.isRequired,
			article: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired,
			reviews: PropTypes.number.isRequired,
		})
	).isRequired,
	filteredGuitars: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			strings: PropTypes.number.isRequired,
			article: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired,
			reviews: PropTypes.number.isRequired,
		})
	).isRequired,
	page: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	minPrice: PropTypes.number,
	maxPrice: PropTypes.number,
	onGuitarsSortChange: PropTypes.func.isRequired,
	onGuitarsSortDirectionChange: PropTypes.func.isRequired,
	sortType: PropTypes.string.isRequired,
	sortDirection: PropTypes.string.isRequired,
	onGuitarsFilterMinPriceChange: PropTypes.func.isRequired,
	onGuitarsFilterMaxPriceChange: PropTypes.func.isRequired,
	filterMinPrice: PropTypes.string.isRequired,
	filterMaxPrice: PropTypes.string.isRequired,
	onFilterMinPriceBlur: PropTypes.func.isRequired,
	onFilterMaxPriceBlur: PropTypes.func.isRequired,
	onFilterTypeSelect: PropTypes.func.isRequired,
	onFilterStringsSelect: PropTypes.func.isRequired,
	filterType: PropTypes.object.isRequired,
	filterStrings: PropTypes.object.isRequired,
	availableStrings: PropTypes.object.isRequired,
	isPopupOpen: PropTypes.bool.isRequired,
	isPopupSuccessOpen: PropTypes.bool.isRequired,
	selectedGuitar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object]).isRequired,
	onPopupOpenClick: PropTypes.func.isRequired,
	onAddToBasketClick: PropTypes.func.isRequired,
	onClosePopup: PropTypes.func.isRequired,
};

export default withCatalog(Catalog);
