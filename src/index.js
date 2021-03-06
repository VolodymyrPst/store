import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app/';
import ErrorBoundry from './components/error-boundry/error-boundry';
import BookStoreService from './services/bookstore-service.js';
import {BookstoreServiceProvider} from './components/bookstore-service-context/bookstore-service-context.js';

import store from './store.js';

const bookstoreService = new BookStoreService();

ReactDOM.render(
	<Provider store = {store}>
		<ErrorBoundry>
			<BookstoreServiceProvider value = {bookstoreService}>
				<Router>
					<App/>
				</Router>
			</BookstoreServiceProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById("root")
);

