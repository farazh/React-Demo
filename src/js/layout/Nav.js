import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
	render() {
		return (
			<nav>
				<ul>
					<li><Link to='/' >About me</Link></li>
					<li><Link to='/blog' >Blog</Link></li>
					<li><Link to='/projects' >Projects</Link></li>
					<li><Link to='/resume' >Resume</Link></li>
					<li><Link to='/site' >Site</Link></li>
				</ul>
			</nav>
			);
	}
}