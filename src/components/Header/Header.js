import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Search from '../Search/Search';

import classes from './Header.module.sass'
import logo from '../../assets/logo.svg';

const links = [
	{to: '/about', label: 'О нас', exact: false},
	{to: '/friends', label: 'Партнеры и друзья', exact: false},
];

class Header extends Component {

	renderLinks() {
		return links.map((link, index) => {
			return (
				<NavLink key={index} to={link.to} exact={link.exact} activeClassName={classes.active}>{ link.label }</NavLink>
			)
		})
	}

	render() {
		return (
			<header className={classes.contanier}>
				<div className={'container'}>
					<div className={'row align-items-center'}>
						<div className={'col-md-3'}>
							<NavLink to="/" exact={true} className={'logotype'}><img src={logo} alt={'Логотип'} /></NavLink>
						</div>
						<div className={'col-md-4'}><Search /></div>
						<div className={'col-md-5 text-left'}>
							<nav className={classes.links}>
								{ this.renderLinks() }
							</nav>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Header 