import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './../components/About';
import Blog from './../components/Blog';
import Projects from './../components/Projects';
import Resume from './../components/Resume';
import Site from './../components/Site';

export default class Main extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={About}/>
				<Route exact path='/blog' component={Blog}/>
				<Route exact path='/projects' component={Projects}/>
				<Route exact path='/resume' component={Resume}/>
				<Route exact path='/site' component={Site}/>
			</Switch>
			);
	}
}