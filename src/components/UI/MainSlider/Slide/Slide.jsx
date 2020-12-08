import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classes from './Slide.module.sass'

class MainSlide extends Component {
	render() {
		return (
			<div className={'row'}>
				<div className={'col-8'}>
					<div className={classes.body}>
						<div className={classes.category_block}>
							<Link to={this.props.data.category_link} className={classes.category}>{ this.props.data.category_name }</Link>
						</div>
						<div className={classes.title_block}>
							<Link to={ this.props.data.url } className={classes.title}>{ this.props.data.title }</Link>
							<p className={classes.desc}>{ this.props.data.desc }</p>
						</div>
					</div>
				</div>
				<div className={'col-4'}>
					<div className={classes.image_block}>
						<Link to={ this.props.data.url } className={classes.image}>
							<img src={ this.props.data.image } alt={ this.props.data.title }/>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default MainSlide