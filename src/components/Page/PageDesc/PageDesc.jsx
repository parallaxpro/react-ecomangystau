import React, {Component} from 'react'

import ShareButtons from '../../UI/ShareButtons/ShareButtons'

import classes from './PageDesc.module.sass'

class PageDesc extends Component {
    render() {
        return(
            <div className="row align-items-center">
                <div className="col-md-8">
                    <p className={classes.desc}>Опубликовано в <a href="/">Инициативы</a> • 25 окт. 2020 год</p>
                </div>
                <div className="col-md-4 justify-content-end d-flex">
                    <ShareButtons data={this.props.data} />
                </div>
            </div>
        )
    }
}

export default PageDesc