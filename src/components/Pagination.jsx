import React from 'react';
import PropTypes from 'prop-types';

import {withPagination} from '../hocs/with-pagination';

const Pagination = (props) => {
	const {onPageChange, page, pagesLength, getPaginationValues} = props;
	return (
		<ol className="pagination">

			{page > 1 && (
				<li key="pre" className="pagination__page pagination__page--next" value={page - 1} onClick={onPageChange}>Назад</li>
				)}

			{
				getPaginationValues().map((value, i) => {
					return <li
						key={i}
						tabIndex="0"
						className={`pagination__page ${page === +value ? `pagination__page--active` : ``}${value === `…` ? `pagination__page--disabled` : ``}`}
						value={value}
						onClick={(evt) => {
							if (value !== `…`) {
								onPageChange(evt);
							}
						}}
						>
							{value}
					</li>
				})
			}

			{page < pagesLength && (
				<li key="next" className="pagination__page pagination__page--next" value={page + 1} onClick={onPageChange}>Далее</li>
			)}

		</ol>
	)
}

Pagination.propTypes = {
	onPageChange: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	pagesLength: PropTypes.number.isRequired,
	getPaginationValues: PropTypes.func.isRequired,
};

export default withPagination(Pagination);
