import React, { Component } from 'react'
import axios from 'axios'
import Progress from '../../components/UI/NProgress/Progress'

class Category extends Component {

	state = {
		person: [],
		isLoading: true,
	}

	render() {
		return(
			<div className={'container'}>
				<React.Fragment>
					<Progress isAnimating={this.state.isLoading} />
				</React.Fragment>
				<h1>{ this.state.person.name }</h1>
			</div>
		)
	}

	componentDidMount() {
		axios.get('https://swapi.dev/api/people/1/').then(res => {
			console.log(res);
			this.setState({ person: res.data });
			this.setState({ isLoading: false });
		})
	}
}

export default Category