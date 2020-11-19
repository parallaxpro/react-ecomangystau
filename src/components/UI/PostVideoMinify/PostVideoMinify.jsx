import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import classes from './PostVideoMinify.module.sass'

class PostVideoMinify extends Component {
    render() {
        return (
            <Link to={'/'} className={classes.block} data-fancybox>
                <span className={ classes.icon }></span>
                <h3 className={classes.title}>{ this.props.title }</h3>
                <img src={ this.props.image } alt={ this.props.title }/>
            </Link>
        )
    }
}

export default PostVideoMinify