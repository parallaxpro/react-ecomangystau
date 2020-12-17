import React from "react";
import { Link, withRouter } from 'react-router-dom'
import classes from './PostMinifyColumn.module.sass'

function PostMinifyColumn(props) {

    function _handleClick(event, link) {
        event.preventDefault();
        props.history.push(link)
        console.log(link)
    }

    return (
        <Link to={ props.to } className={classes.block}>
            <article className="row">
                <div className="col-sm-6">
                    <div className={classes.image}>
                        <img src={props.image} alt={props.title} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className={classes.content}>
                        <p className={classes.category} onClick={ event => _handleClick(event, props.category_link) }>{ props.category }</p>
                        <h3 className={classes.title}>{ props.title }</h3>
                        <p className={classes.date}>{ props.date }</p>
                    </div>
                </div>
            </article>
        </Link>
    )
}

export default withRouter(PostMinifyColumn)