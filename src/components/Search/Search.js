import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import classes from './Search.module.sass'

class Search extends Component {

	constructor(props) {
		super(props)
	}
	
	_handleKeyDown(e) {
		if (e.key === 'Enter') {
			this.props.history.push(`/search?v=${e.target.value}`);
		}
	}

	render() {
		return(
			<div className={classes.container}>
				<input type="search" placeholder={'Поиск...'} onKeyDown={this._handleKeyDown.bind(this)} />
			</div>
		)
	}
}

export default withRouter(Search)