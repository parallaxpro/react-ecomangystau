import React, { Component } from 'react';
import axios from 'axios'

import categoryClasses  from '../Category/Category.module.sass'
import classes          from './Search.module.sass'
import ShareButtons     from '../../components/UI/ShareButtons/ShareButtons'
import SEO 				from '../../components/SEO/SEO'
import Loader           from '../../components/Loaders/FAQ/FAQ'

import PostColumn       from '../../components/UI/PostColumn/PostColumn'
import PostVideo        from '../../components/UI/PostVideoMinify/PostVideoMinify'
import CategoryButton   from '../../components/UI/CategoryButton/CategoryButton'


class Search extends Component {

	constructor(props) {
		super(props)

		this.state = { isLoading: true }
    }

    renderResults() {
        if (this.state.data.pages) {
            const pages = this.state.data.pages
            return (
                pages.map((page, index) => {

                    if (page.type === 'Article') {
                        return <div className={'col-md-4'} key={index}>
                            <div className={classes.block}>
                                <PostColumn to={ page.url } title={ page.title } image={ page.image } desc={ page.desc } date={ page.footer }/>
                            </div>
                        </div>
                    }

                    if (page.type === 'Video') {
                        return <div className={'col-md-4'} key={index}>
                            <div className={classes.block}>
                                <PostVideo image={ page.image } title={ page.title } video={ page.video } />
                            </div>
                        </div>
                    }

                    if (page.type === 'Category') {
                        return <div className={'col-md-6'} key={index}>
                            <div className={classes.block}>
                                <CategoryButton to={ page.url } title={ page.title } subtitle={ page.desc } />
                            </div>
                        </div>
                    }

                    if (page.type === 'Consultant') {
                        return <div className={'col-md-6'} key={index}>
                            <div className={classes.block}>
                                <CategoryButton to={ page.url } title={ page.title } subtitle={'Эко-консультант'} />
                            </div>
                        </div>
                    }

                    return <div key={index}>{ page.type } — {page.title}</div>
                })
            )
        } else {
            return (
                <div style={{ textAlign: 'center' }}>Ничего не найдено</div>
            )
        }
    }
    
    getSearch() {
        axios.get(`//storage.ecomangystau.kz/api/search${this.props.location.search}`).then(res => {			
			this.setState({ data: res.data })
			this.setState({ isLoading: false })
		}) 
    }

	componentDidMount() {
        this.getSearch()      
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.getSearch()
            this.setState({ isLoading: true })
        }
    }
    
    shouldComponentUpdate(nextProps) {
        return nextProps.location.search !== this.props.location.search || this.props.location.search
    }
	
	render() {
		if (this.state.isLoading) {
			document.getElementsByTagName('body')[0].style.overflow = 'hidden';
			return (
				<div className={categoryClasses.body}>
                    <div className="container faq-style-wrapper">
                        <div className="row">
                            <div className="col-md-10 m-auto">
								<Loader />
                            </div>
                        </div>
                    </div>
                </div>
			)
		}

		document.getElementsByTagName('body')[0].style.overflow = 'unset';
		return (
			<div className={categoryClasses.body}>
				
				{/* IN HEAD DOCUMENT */}
					<SEO data={ this.state.data.seo } />
				{/* *** */}

				<div className={categoryClasses.header}>
					<div className={'container'}>
						<div className={'row align-items-end'}>
							<div className="col-md-10 m-auto">
								<div className="row align-items-center">
									<div className="col-md-6">
										<h1 className={categoryClasses.title} dangerouslySetInnerHTML={{__html: this.state.data.title }}></h1>
									</div>
									<div className="col-md-6 justify-content-end d-flex">
										<ShareButtons title={this.state.data.query} desc={this.state.data.query} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={categoryClasses.body}>
					<div className="container">
						<div className="row">
                            { this.renderResults() }
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Search 