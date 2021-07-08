import React from 'react';
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom';

import Header from '../components/Header';
import Catalog from '../components/Catalog';
import Basket from '../components/Basket';
import Footer from '../components/Footer';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<Header />
				<main className="main app__main center">

					<Switch>
							<Redirect from="/" to="/catalog" exact />

							<Route path="/catalog" exact>
								<Catalog />
							</Route>

							<Route path="/basket" exact>
								<Basket />
							</Route>

					</Switch>

				</main>

				<Footer />

			</div>
		</BrowserRouter>
	)
}

export default App;
