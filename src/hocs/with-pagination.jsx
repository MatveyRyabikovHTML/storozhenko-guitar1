import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {MAX_PAGE_GUITARS, INTERMEDIATE_PAGINATION_VALUE, AMOUNT_SIDE_ACTIVE_PAGE_BUTTONS} from '../const';

export const withPagination = (Component) => {
	class WithPagination extends PureComponent {
		constructor(props) {
			super(props);

			this.guitarsLength = Math.ceil(this.props.guitars.length / MAX_PAGE_GUITARS);

			this.getPaginationValues = this.getPaginationValues.bind(this);
		}

		getPaginationValues() {
			let values = [];
			this.guitarsLength = Math.ceil(this.props.guitars.length / MAX_PAGE_GUITARS);
			
			values.push(`1`);
			
			if (this.props.page > INTERMEDIATE_PAGINATION_VALUE) {
				values.push(`…`);
			}
			
			for(let i = this.props.page - AMOUNT_SIDE_ACTIVE_PAGE_BUTTONS; i <= this.props.page + AMOUNT_SIDE_ACTIVE_PAGE_BUTTONS; i++) {
				if (i > 1 && i < this.guitarsLength) {
					values.push(i.toString());
				}
			}
			
			if (this.props.page < this.guitarsLength - INTERMEDIATE_PAGINATION_VALUE) {
				values.push(`…`);
			}
			
			values.push(this.guitarsLength.toString());

			values = Array.from(new Set(values))

			return values;
		}

		render() {
			this.guitarsLength = Math.ceil(this.props.guitars.length / MAX_PAGE_GUITARS);
			return(
				<Component
					page={this.props.page}
					onPageChange={this.props.onPageChange}
					pagesLength={this.guitarsLength}
					getPaginationValues={this.getPaginationValues}
				/>
		)}
	}

	WithPagination.propTypes = {
		guitars: PropTypes.arrayOf(
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
		onPageChange: PropTypes.func.isRequired,
		page: PropTypes.number.isRequired,
	};

	return WithPagination;
}
