import React, { Component } from 'react'
import axios from 'axios'

import classes from './Category.module.sass'

class Category extends Component {

	state = {
		person: [],
		isLoading: true,
	}

	render() {
		return(
			<div className={'container'}>
				<h1 className={classes.title}>{ this.state.person.name }</h1>
			</div>
		)
	}

	componentDidMount() {
		const url = window.location.pathname;
		// const segment = url.substring(url.lastIndexOf('/') + 1);

		console.log(url);
		// const url = document.URL;
		// const segment = url.substring(url.lastIndexOf('/') + 1);

		// console.log(segment);
		axios.get('https://swapi.dev/api/people/1/').then(res => {
			// console.log(res);
			this.setState({ person: res.data });
			this.setState({ isLoading: false });
		})
	}
}

export default Category