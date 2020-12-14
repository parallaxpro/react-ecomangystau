import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import classes from './CategoryButton.module.sass'

class CategoryButtonNav extends Component {
    render() {

        const desc = () => {
            if (this.props.subtitle) {
                return <p className={classes.subtitle}>{ this.props.subtitle }</p>
            } else {
                return ''
            }
        }

        return(
            <NavLink to={ this.props.to } activeClassName={classes.btn_active} className={classes.button}>
                <div>
                    <h3 className={classes.title}>{ this.props.title }</h3>
                    { desc() }
                </div>
            </NavLink>
        )
    }
}

export default CategoryButtonNav