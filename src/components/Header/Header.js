import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

import Search from '../Search/Search';

import classes from './Header.module.sass'
import logo from '../../assets/logo.svg';

class Header extends Component {

	state = {
		menu: [],
	}

	renderLinks() {
		return this.state.menu.map((link, index) => {
			return (
				<NavLink key={index} to={link.url} exact={false} activeClassName={classes.active}>{ link.name }</NavLink>
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

	componentDidMount() {
		axios.get('//ecomangystau-backend/api/menu/up').then(res => {			
			var $menu = res.data;
			this.setState({ menu: $menu.map((index) => {
				return index
			}) })
		})
	}
}

export default Header 