import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import ShareButtons from '../../UI/ShareButtons/ShareButtons'

import classes from './PageDesc.module.sass'

class PageDesc extends Component {
    render() {
        return(
            <div className="row align-items-center">
                <div className="col-lg-8">
                    <p className={ classes.desc }>Опубликовано в <Link to={ this.props.to }>{ this.props.category }</Link> • { this.props.date }</p>
                </div>
                <div className="col-lg-4 justify-content-lg-end d-flex mt-lg-0 mt-4">
                    <ShareButtons title={ this.props.title } desc={ this.props.desc } />
                </div>
            </div>
        )
    }
}

export default PageDesc