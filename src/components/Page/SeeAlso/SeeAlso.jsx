import React, { Component } from 'react'

import Header       from '../../UI/LastetSection/Header/Header'
import PostColumn   from '../../UI/PostColumn/PostColumn'
import PostVideo    from '../../UI/PostVideoMinify/PostVideoMinify'

import classes      from './SeeAlso.module.sass'

class SeeAlso extends Component {

    render() {
        return(
            <section className={classes.section}>
                <div className={'container'}>
                    <Header title={'Смотреть так же'} />
                </div>
                <div className={'container'}>
                    <div className="row">
                        { this.props.articles.map((article, index) =>
                            { if (article.type === 'article') {
                                return (
                                    <div className="col-xl-4 col-md-6" key={ index }>
                                        <div className={classes.post}>
                                            <PostColumn to={ article.url } image={ article.image } title={ article.title } desc={ article.desc } date={ article.footer }></PostColumn>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="col-xl-4 col-md-6" key={ index }>
                                        <div className={classes.post}>
                                            <PostVideo image={ article.image } title={ article.title } video={ article.video } />
                                        </div>
                                    </div>
                                )
                            } }
                        ) }
                    </div>
                </div>
            </section>
        )
    }
}

export default SeeAlso