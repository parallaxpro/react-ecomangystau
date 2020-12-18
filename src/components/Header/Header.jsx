import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

import Search from '../Search/Search';

import classes from './Header.module.sass'
import logo from '../../assets/logo.svg';

class Header extends Component {

	state = {
		menuUp: [],
		categories: [],
	}

	renderLinksUp() {
		return this.state.menuUp.map((link, index) => {

			var $className = '';
			if (link.select === 1) $className = classes.selected;

			if (link.navlink === true) {
				return <NavLink key={index} to={link.url} exact={false} activeClassName={classes.active} className={$className}>{ link.name }</NavLink>
			} else {
				return <a key={index} href={link.url} target={'_blank'} rel="noreferrer" className={$className}>{ link.name }</a>
			}
		})
	}

	renderLinksCategory() {
		return this.state.categories.map((link, index) => {
			return <div className={'col-xl-4'} key={index}><NavLink to={`/${link.url}`} exact={false} activeClassName={classes.active} onClick={this._hideMenu}>{ link.name }</NavLink></div>
		})
	}

	_handleClickMobile() {
		let x = document.getElementById("main-nav");

		if (x.className === "main-nav") {
			x.className += " responsive";
		} else {
			x.className = "main-nav";
		}
		if (x.style.height){
			x.style.height = null;
			x.style.visibility = 'hidden'; 
		} else {
			x.style.height = x.scrollHeight + "px";
			x.style.visibility = 'visible'; 
		} 
	}

	_hideMenu() {
		let x = document.getElementById("main-nav");
		x.className = "main-nav";
		x.style.height = null;
		x.style.visibility = 'hidden'; 
	}

	_handleClickCategory() {
		let x = document.getElementById("main-nav-category");

		if (x.className === "main-nav") {
			x.className += " responsive";
		} else {
			x.className = "main-nav";
		}
		if (x.style.height){
			x.style.height = null;
			x.style.visibility = 'hidden'; 
		} else {
			x.style.height = x.scrollHeight + "px";
			x.style.visibility = 'visible'; 
		}
	}

	render() {
		return (
			<header className={classes.header}>
				<div className={classes.container}>
					<div className={'container'}>
						<div className={'row align-items-center'}>

							<div className={'col-6 col-sm-4 col-xl-3 d-flex align-items-center'}>
								<div className={'d-xl-none d-flex mr-3'}>
									<button className={classes.mobile_btn} onClick={ this._handleClickMobile }>
										<svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99995 3.99992H62C63.1041 3.99992 64 3.10384 64 1.99996C64 0.895909 63.1039 0 62 0H1.99995C0.895906 0 0 0.896075 0 1.99996C0 3.10384 0.896072 3.99992 1.99995 3.99992Z" fill="black"/><path d="M62 14H1.99995C0.895906 14 0 14.8961 0 16C0 17.1038 0.896072 17.9999 1.99995 17.9999H62C63.1041 17.9999 64 17.1038 64 16C64 14.8961 63.1041 14 62 14Z" fill="black"/><path d="M42 28H1.99995C0.895904 28 0 28.8961 0 30C0 31.104 0.896071 31.9999 1.99995 31.9999H42C43.1041 31.9999 44 31.1038 44 30C44.0001 28.8959 43.1041 28 42 28Z" fill="black"/></svg>
									</button>
								</div>

								<div className={'d-xl-flex d-none mr-4'}>
									<button className={classes.mobile_btn} onClick={ this._handleClickCategory }>
										<svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99995 3.99992H62C63.1041 3.99992 64 3.10384 64 1.99996C64 0.895909 63.1039 0 62 0H1.99995C0.895906 0 0 0.896075 0 1.99996C0 3.10384 0.896072 3.99992 1.99995 3.99992Z" fill="black"/><path d="M62 14H1.99995C0.895906 14 0 14.8961 0 16C0 17.1038 0.896072 17.9999 1.99995 17.9999H62C63.1041 17.9999 64 17.1038 64 16C64 14.8961 63.1041 14 62 14Z" fill="black"/><path d="M42 28H1.99995C0.895904 28 0 28.8961 0 30C0 31.104 0.896071 31.9999 1.99995 31.9999H42C43.1041 31.9999 44 31.1038 44 30C44.0001 28.8959 43.1041 28 42 28Z" fill="black"/></svg>
									</button>
								</div>
								<NavLink to="/" exact={true} className={'logotype'}><img src={logo} alt={'Логотип'} /></NavLink>
							</div>

							<div className={'col-6 col-sm-8 col-xl-4'}><Search /></div>
							
							<div className={'col-md-5 text-left d-none d-xl-block'}>
								<nav className={classes.links}>
									{ this.renderLinksUp() }
								</nav>
							</div>
						</div>
					</div>
				</div>
				<div id={'main-nav'} className={'main-nav'}>
					<div className="container">
						<div className={classes.mobile}>
							<div className="row">
							{ this.renderLinksCategory() }
							</div>
							<hr/>
							{ this.renderLinksUp() }
						</div>
					</div>
				</div>

				<div id={'main-nav-category'} className={'main-nav'}>
					<div className="container">
						<div className={classes.mobile}>
							<div className="row">
								{ this.renderLinksCategory() }
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}

	componentDidMount() {
		axios.get('//storage.ecomangystau.kz/api/menu/up').then(res => {			
			var $menu = res.data;
			this.setState({ menuUp: $menu.up.map((index) => {
				return index
			}) })
			this.setState({ categories: $menu.categories.map((index) => {
				return index
			}) })
		})
	}
}

export default Header 