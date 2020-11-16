import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import classes from './Layout.module.sass'
import parallax from '../../assets/parallax.svg'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class Layout extends Component {
	render() {
		return(
			<div className={classes.layout}>
				<Header />
				<main className={classes.content}>
					{ this.props.children }
				</main>
				<Footer />
				<div className={classes.production}>
					<a href="https://parallax.pro/" rel="noopener noreferrer" target={'_blank'}><img src={parallax} alt="Сделано с любовью — PARALLAX.PRO"/></a>
				</div>
			</div>
		)
	}
}

export default Layout