import React, { Component } 	from 'react'
import axios 					from 'axios'

import classes 					from './Layout.module.sass'
import parallax 				from '../../assets/parallax.svg'

import Header 					from '../../components/Header/Header'
import Footer 					from '../../components/Footer/Footer'
// import ym, { YMInitializer } 	from 'react-yandex-metrika';
// import { withRouter } 			from 'react-router-dom'

// import  from 'react-yandex-metrika';

class Layout extends Component {

	// constructor(props) {
	// 	super(props)

	// 	this.state = {  }
	// }

	state = {
		setting: ''
	}

	trackScroll() {
		var scrolled = window.pageYOffset;
		var coords = document.documentElement.clientHeight;
		
		var goTopBtn = document.getElementById('back_to_top');

		if (scrolled > coords) {
			goTopBtn.classList.add('back_to_top-show');
		}
		if (scrolled < coords) {
			goTopBtn.classList.remove('back_to_top-show');
		}
	}
	
	backToTop() {
		// console.log(window.pageYOffset)
		if (window.pageYOffset > 0) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	}
		
	componentDidMount() {

		axios.get('//storage.ecomangystau.kz/api/setting').then(res => {			
			this.setState({ setting: res.data })
        }) 

		var goTopBtn = document.getElementById('back_to_top');

		window.addEventListener('scroll', this.trackScroll);
		goTopBtn.addEventListener('click', this.backToTop);
	}

	// yandex_metrica() {
	// 	if (this.state.setting) {
	// 		ym('hit', '/cart');
	// 		ym('reachGoal', 'whateverGoal', {awesomeParameter: 42});
	// 		return <YMInitializer accounts={[ this.state.setting.metrika ]} options={{webvisor: true}} />
	// 	}
	// }

	render() {
		return (
			<div className={classes.layout}>
				<Header />
				<main className={classes.content}>
					{ this.props.children }
				</main>
				<Footer />
				<div className={classes.production} id={'prod'}>
					<a href="https://parallax.pro/" rel="noopener noreferrer" target={'_blank'}><img src={parallax} alt="Сделано с любовью — PARALLAX.PRO"/></a>
				</div>
				<span className={classes.back_to_top} id={'back_to_top'} title="Наверх">&uarr;</span>
				
				{/* { this.yandex_metrica() } */}
			</div>
		)
	}
}

export default Layout