import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {basket} from './store/basket';

import App from './components/App';
import './sass/style.scss';

ReactDOM.render(
	<Provider store={createStore(basket)}>
		<App />
	</Provider>,
	document.getElementById('root')
);
