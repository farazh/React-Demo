import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './layout/Nav';
import Main from './layout/Main'
import { HashRouter } from 'react-router-dom';

 ReactDOM.render(
 	<HashRouter>
		<div>
			<Nav />
			<Main />
		</div>
 	</HashRouter>, 
 	document.getElementById('app'));