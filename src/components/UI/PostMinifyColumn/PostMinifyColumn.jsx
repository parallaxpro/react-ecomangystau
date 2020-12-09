import React, { Component } from "react";
import { Link } from 'react-router-dom'
import classes from './PostMinifyColumn.module.sass'

class PostMinifyColumn extends Component {
    render() {
        return(
            <Link to={ this.props.to } className={classes.block}>
                <div className="row">
                    <div className="col-md-6">
                        <div className={classes.image}>
                            <img src={this.props.image} alt={this.props.title} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={classes.content}>
                            <p className={classes.category}>{ this.props.category }</p>
                            <h3 className={classes.title}>{ this.props.title }</h3>
                            <p className={classes.date}>{ this.props.date }</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default PostMinifyColumn