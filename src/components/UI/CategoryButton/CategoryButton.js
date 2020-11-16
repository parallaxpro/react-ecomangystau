import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import classes from './CategoryButton.module.sass'

class CategoryButton extends Component {
    render() {
        return(
            <Link to={ this.props.to } className={classes.button}>
                <h3 className={classes.title}>{ this.props.title }</h3>
                <p className={classes.subtitle}>{ this.props.subtitle }</p>
            </Link>
        )
    }
}

export default CategoryButton