import React, { Component } from 'react'
import axios from 'axios'


class Category extends Component {

	state = {
		person: []
	}

	render() {
		return(
			<div className={'container'}>
				<h1>{ this.state.person.name }</h1>
				{/* { this.props.title } */}
			</div>
		)
	}

	componentDidMount() {
		axios.get('https://swapi.dev/api/people/1/').then(res => {
			console.log(res);
			this.setState({ person: res.data });
		})
	}
}

export default Category