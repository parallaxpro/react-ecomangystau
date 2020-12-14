import React, { Component } from 'react'
import axios from 'axios'
import SEO from '../../components/SEO/SEO'
import categoryClasses from '../Category/Category.module.sass'
import classes from './Services.module.sass'
import ShareButtons from '../../components/UI/ShareButtons/ShareButtons'
import CategoryButton from '../../components/UI/CategoryButton/CategoryButtonNav'
import Loader from '../../components/Loaders/Services/Services'

class Services extends Component {

    constructor(props) {
        super(props)

        this.state = { loading: true }
    }
    
    componentDidMount() {
        axios.get('//storage.ecomangystau.kz/api/c/services').then(response => {
            this.setState({ article: response.data })
        }).finally(() => this.setState({ loading: false }))
    }

    render() {
        if (this.state.loading) {
            return <div className={categoryClasses.body}>
                <div className="container">
                    <Loader />
                </div>
            </div>
        }

        return(
            <div className={categoryClasses.body}>

                {/* IN HEAD DOCUMENT */}
                    <SEO data={ this.state.article.seo } />
                {/* *** */}

                <div className={categoryClasses.header}>
                    <div className={'container'}>
                        <div className={'row align-items-end'}>
                            <div className="col-md-10 m-auto">
                                <div className="row align-items-center">
                                    <div className="col-md-8">
                                        <h1 className={categoryClasses.title}>{ this.state.article.title }</h1>
                                    </div>
                                    <div className="col-md-4 justify-content-lg-end mt-4 mt-lg-0 d-flex">
                                        <ShareButtons title={ this.state.article.title } desc={ this.state.article.desc } />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.body}>
                    <div className="container">
                        
                        <div className="row">

                            { this.state.article.articles.map(article => {
                                return (
                                    <div className="col-lg-6" key={ article.id }>
                                        <div className={classes.service}>
                                            <CategoryButton to={ article.url } title={ article.title } subtitle={ article.desc } />
                                        </div>
                                    </div>
                                )
                            }) }

                        </div>

                    </div>
                </div>

                <div className={classes.article}>
                    { this.props.children }
                </div>

            </div>
        )
    }
}

export default Services