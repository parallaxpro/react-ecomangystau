import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import classes from './PostColumn.module.sass'

class PostColumn extends Component {
    render() {
        return (
            <Link to={ this.props.to } className={'d-block'}>
                <article className={classes.article}>
                    <div className={ classes.image }>
                        <img src={ this.props.image } alt={ this.props.title }/>
                    </div>
                    <h3 className={ classes.title }>{ this.props.title }</h3>
                    <p className={ classes.desc }>{ this.props.desc }</p>
                    <p className={ classes.date }>{ this.props.date }</p>
                </article>
            </Link>
        )
    }
}

export default PostColumn