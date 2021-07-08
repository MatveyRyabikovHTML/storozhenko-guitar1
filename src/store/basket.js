import {extend} from '../utils';
import {ActionType} from './actions';

const initialState = {
	guitars: {},
};

const basket = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.ADD_GUITAR:

			return extend(state, {
				guitars: isNaN(state.guitars[action.payload])
				?
				extend(state.guitars, {[action.payload]: 1})
				:
				extend(state.guitars, {[action.payload]: state.guitars[action.payload] + 1})
			});

		case ActionType.DELETE_GUITAR:

			delete state.guitars[action.payload];

			return extend(state, {
				guitars: Object.assign({}, state.guitars),
			});


		case ActionType.CHANGE_GUITAR_AMOUNT:

			return extend(state, {
				guitars: extend(state.guitars, {[action.payload.article]: state.guitars[action.payload.article] + (1 * action.payload.direction)})
			});

		default:
			return state;
	}
}

export {basket};
