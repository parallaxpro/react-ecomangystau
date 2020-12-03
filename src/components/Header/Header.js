import React, { Component, Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import ContentLoader from 'react-content-loader'
import axios from 'axios'

import Search from '../Search/Search';

import classes from './Header.module.sass'
import logo from '../../assets/logo.svg';

// const links = [
// 	{to: '/about', label: 'О нас', exact: false},
// 	{to: '/friends', label: 'Партнеры и друзья', exact: false},
// ];

class Header extends Component {

	state = {
		menu: [],
	}

	renderLinks() {
		return this.state.menu.map((link, index) => {
			// console.log(link.url);
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
							<Suspense fallback={<ContentLoader speed={2} width={100} height={10} viewBox="0 0 100 10" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
									<rect x="0" y="0" rx="0" ry="0" width="100" height="10" /> 
								</ContentLoader>}>
								{ this.renderLinks() }
							</Suspense>
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