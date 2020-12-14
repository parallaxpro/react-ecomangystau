import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Loader from '../../components/Loaders/Category/Category'
import ShareButtons from '../../components/UI/ShareButtons/ShareButtons'
import SEO from '../../components/SEO/SEO'
import PostColumn from '../../components/UI/PostColumn/PostColumn'
import PostVideo from '../../components/UI/PostVideoMinify/PostVideoMinify'

import classes from './Category.module.sass'

function Category() {
	
	const [setting, setSetting] 			= useState([])
	const [articles, setArticles] 			= useState([])
	const [currentPage, setCurrentPage]		= useState(1)
	const [lastPage, setLastPage]			= useState()
	const [loading, setLoading] 			= useState(true)
	const [loadingInfo, setLoadingInfo] 	= useState(true)
	const [fetching, setFetching] 			= useState(true)

	useEffect(() => {
		if (loadingInfo) {
			window.scrollTo(0, 0)
			axios.get('//storage.ecomangystau.kz/api/c/info' + window.location.pathname + '').then(response => {
				setSetting(response.data);
			}).finally(() => setLoadingInfo(false))
		}
	}, [loadingInfo])

	useEffect(() => {
		if (fetching) {
			if (lastPage !== currentPage) {
				axios.get(`//storage.ecomangystau.kz/api/c/articles` + window.location.pathname + `?page=${currentPage}`)
						.then(response => {
							setArticles(articles => [...articles, ...response.data.articles])
							setLastPage(response.data.pagination.lastPage + 1)
							setLoading(false)
							setCurrentPage( prevState => prevState + 1 )
						})
						.finally(() => {setFetching(false)})
			}
		}
	}, [fetching])

	useEffect(() => {
		document.addEventListener('scroll', scrollHandller)
		return function() {
			document.removeEventListener('scroll', scrollHandller)
		}
	}, [])

	const scrollHandller = (e) => {
		var footer = document.getElementsByTagName('footer')[0].clientHeight + document.getElementById('prod').clientHeight
		if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight + footer) < 150) {
			setFetching(true)
		}
	}

	if (loading) {
		return (
			<div className={classes.body}>
				<div className={'container'}>
					<Loader />
				</div>
			</div>
		)
	}
	
	return (
		<div className={classes.body}>

			{/* IN HEAD DOCUMENT */}
				<SEO data={ setting.seo } />
			{/* *** */}

			<div className={classes.header}>
				<div className={'container'}>
					<div className={'row align-items-end'}>
						<div className="col-lg-8">
							<div className="d-flex align-items-center">
								<h1 className={classes.title}>{ setting.title }</h1>
								<span className={classes.count}>{ setting.count_articles }</span>
							</div>
							<p className={classes.desc}>{ setting.desc }</p>
						</div>
						<div className="col-lg-4 justify-content-lg-end d-flex mt-lg-0 mt-5">
							<ShareButtons title={ setting.title } desc={ setting.desc } />
						</div>
					</div>
				</div>
			</div>
			<div className={classes.content}>
				<div className={'container'}>
					<div className="row">
						{ articles.map(article =>
							{if (article.type === 'article') {
								return (
									<div className="col-xl-4 col-md-6" key={article.id}>
										<div className={classes.post}>
											<PostColumn to={ article.url } image={ article.image } title={article.title} desc={article.desc} date={article.footer} />
										</div>
									</div>
								)
							} else {
								return (
									<div className="col-xl-4 col-md-6" key={article.id}>
										<div className={classes.post}>
											<PostVideo image={ article.image } title={ article.title } video={ article.video } />
										</div>
									</div>
								)
							}}
						) }
					</div>
				</div>
			</div>
		</div>
	)

}

export default Category