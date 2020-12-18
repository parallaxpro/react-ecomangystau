import React, { Component } from 'react'
import Image from "react-modal-image";
import axios from 'axios'
import classes from './Page.module.sass'

import PageDesc from '../../components/Page/PageDesc/PageDesc'
import SeeAlso from '../../components/Page/SeeAlso/SeeAlso'
import SEO from '../../components/SEO/SEO'
import Gallery from '../../components/UI/Gallery/Gallery'
import Content from '../../components/UI/ArticleContent/ArticleContent'
import Loader from '../../components/Loaders/Page/Page'

import NotFound from '../404/404'

const API_URL = '//storage.ecomangystau.kz'

class Page extends Component {

    constructor(props) {
        super(props)
        this.state = { loading: true }
    }

    getArticle(category_slug, article_slug) {
        // window.scrollTo(0, 0)
        axios.get(API_URL + '/api/c/article/' + category_slug + '/' + article_slug + '').then(response => {

            if (response.data.status === 404) {
                this.setState({ notFound: true })
            }

            this.setState({ article: response.data })
        }).finally(() => this.setState({ loading: false }))
    }

    componentDidMount() {
        let thisCategorySlug = this.props.match.params.category
        let thisArticleSlug = this.props.match.params.page

        this.getArticle(thisCategorySlug, thisArticleSlug)
    }
    
    shouldComponentUpdate(nextProps) {
        return nextProps.match.params.page !== this.props.match.params.page || this.props.match.params.page
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.getArticle(this.props.match.params.category, this.props.match.params.page)
            this.setState({ loading: true })
        }
    }

    render() {
        if (this.state.loading) {
            window.scrollTo(0, 0);
            return (
                <div className={classes.loading}>
                    <div className="container">
                        <Loader />
                    </div>
                </div>
            )
        } else {

            if (this.state.notFound) {
                return <NotFound />
            }

            let image = () => {
                if (this.state.article.image) {
                    return (
                        <div className="col-md-12">
                            <figure className={classes.img_preview}>
                                <p><Image small={ this.state.article.image } large={ this.state.article.image } alt={ this.state.article.title } /></p>
                            </figure>
                        </div>
                    )
                } else {
                    return ''
                }
            }

            return (
                <article className={classes.body}>

                    {/* IN HEAD DOCUMENT */}
                        <SEO data={ this.state.article.seo } />
                    {/* *** */}

                    <div className="container">
                        <div className={classes.header}>
                            <div className="row">
                                <div className="col-md-10 m-auto">
                                    <h1 className={classes.title}>{ this.state.article.title }</h1>
                                    <PageDesc title={ this.state.article.title } desc={ this.state.article.desc } category={ this.state.article.category_name } to={ this.state.article.category_link } date={ this.state.article.date } />
                                </div>
                            </div>
                        </div>
                        <div className={classes.article}>
                            <div className="row">
                               
                               { image() }

                                <div className={'col-md-12'}>
                                    <Content article={ this.state.article.content } />
                                </div>

                                <div className="col-md-12"><Gallery images={this.state.article.gallery} title={this.state.article.title} /></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 m-auto">
                                <PageDesc title={ this.state.article.title } desc={ this.state.article.desc } category={ this.state.article.category_name } to={ this.state.article.category_link } date={ this.state.article.date } />
                            </div>
                        </div>
                    </div>

                    <SeeAlso articles={ this.state.article.other } />

                </article>
            )
        }
    }
}

export default Page