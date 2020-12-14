import React, {Component} from 'react'

import PostVideoMinify from '../../PostVideoMinify/PostVideoMinify'
import Header from '../Header/Header'

import classes from './SectionVideo.module.sass'

class Video extends Component {
    render() {
        return(
            <section className={classes.section}>
                <div className={'container'}>
                    <Header title={ this.props.data.category.name } more={ this.props.data.category.link } />
                </div>
                <div className="container">
                    <div className={classes.body}>
                        <div className="row">

                            { this.props.data.articles.map((article, index) => {
                                return (
                                    <div className="col-md-4" key={index}>
                                        <div className={classes.block}>
                                            <PostVideoMinify image={ article.image } title={ article.title } video={ article.video }></PostVideoMinify>
                                        </div>
                                    </div>
                                )
                            }) }

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Video