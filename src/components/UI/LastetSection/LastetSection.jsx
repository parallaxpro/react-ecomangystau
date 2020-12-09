import React, {Component} from 'react'
import classes from './LastetSection.module.sass'

import Header from './Header/Header'
import PostMinifyRow from '../PostMinifyRow/PostMinifyRow'
import PostMinifyColumn from '../PostColumn/PostColumn'

class LastetSection extends Component {
    render() {
        return (
            <section className={classes.section}>
                <div className={'container'}>
                    <Header title={ this.props.data.category.name } more={ this.props.data.category.link } />
                </div>
                <div className="container">
                    <div className={classes.body}>
                        <div className="row">

                            { this.props.data.articles[0].map((article, index) => {
                                return (
                                    <div className="col-md-4" key={index}>
                                        <PostMinifyColumn to={ article.url } image={ article.image } title={article.title} desc={article.desc} date={article.footer}></PostMinifyColumn>
                                    </div>
                                )
                            }) }

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        { this.props.data.articles[1].map((article, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <PostMinifyRow to={ article.url } title={ article.title } subtitle={ article.footer }></PostMinifyRow>
                                </div>
                            )
                        }) }
                    </div>
                </div>
            </section>
        )
    }
}

export default LastetSection