import React, {Component} from 'react'
import axios from 'axios'

import Layout from '../Services/Services'
import Content from '../../components/UI/ArticleContent/ArticleContent'
// import classes from './ServicePage.module.sass'
import Loader from '../../components/Loaders/ServicePage/ServicePage'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = { loading: true }
    }

    getArticle(category_slug, article_slug) {
        // window.scrollTo(0, 0)
        axios.get('//storage.ecomangystau.kz/api/c/article/' + category_slug + '/' + article_slug + '').then(response => {
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

        console.log(this.state)

        if (this.state.loading) {
            return (
                <Layout>
                    <div className={'container'}>
                        <div className="row">
                            <div className="col-md-10 m-auto">
                                <Loader />
                            </div>
                        </div>
                    </div>
                </Layout>
            )
        }
        
        return (
            <Layout>
                <div className={'container'}>
                    <Content article={ this.state.article.content } />
                </div>
            </Layout>
        )
        
	}
}

export default App;
