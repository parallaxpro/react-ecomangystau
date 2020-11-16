import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classes from './PostMinifyRow.module.sass'

class PostMinifyRow extends Component {
    render() {
        return(
            <Link to={ this.props.to } className={classes.block}>
                <div className={classes.title}>{ this.props.title }</div>
                <div className={classes.footer}><p>{ this.props.subtitle }</p></div>
            </Link>
        )
    }
}

export default PostMinifyRow