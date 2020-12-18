import React, { Component } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

import classes from './Home.module.sass'

import PostMinifyRow from '../../components/UI/PostMinifyRow/PostMinifyRow'
import LastetSection from '../../components/UI/LastetSection/LastetSection'
import MinifySection from '../../components/UI/LastetSection/MinifySection/MinifySection'
import MainSlider from '../../components/UI/MainSlider/MainSlider'
import SectionVideo from '../../components/UI/LastetSection/SectionVideo/SectionVideo'
import ServicesSlider from '../../components/UI/ServicesSlider/ServicesSlider'
import HomeLoader from '../../components/Loaders/Home/Home'
import SEO 				from '../../components/SEO/SEO'


class Home extends Component {
	state = {
        content: {
			services: 		[],
			slides: 		[],
			lastArticles: 	[],
			mainSlider: 	[],
			categories: 	[],
		},
		isLoading: true
	}

	renderLastArticles() {
		return this.state.content.lastArticles.map((article, index) => {
			return (
				<PostMinifyRow key={index} to={article.url} title={article.title} subtitle={article.desc} />
			)
		})
	}
	
	render() {

		window.scrollTo(0, 0)
		document.getElementsByTagName('body')[0].style.overflow = 'hidden';

		const paramsSlider = {
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			},
		}

		return (
			this.state.isLoading ?
				<section className={classes.bg_gradient}>
					<div className="container">
						<HomeLoader />
					</div>
				</section>
			:
			<div className={classes.home}>

				{/* IN HEAD DOCUMENT */}
					<SEO data={ this.state.content.seo } />
				{/* *** */}
				
				<section className={classes.bg_gradient}>

					<ServicesSlider data={this.state.content.services} />
					
					<div className={classes.second}>
						<div className={'container'}>
							<div className={'row'}>
								<div className={'col-xl-8'}>
									<div className={classes.banner_slider}>
										<Swiper {...paramsSlider}>
											{ this.state.content.slides.map((slide, index) => {
												return <SwiperSlide key={index}><a href={slide.link} className={classes.banner}><img src={slide.image} alt={slide.name} /></a></SwiperSlide> 
											}) }
										</Swiper>
									</div>
								</div>
								<div className={'col-xl-4 mt-4 mt-xl-0'}>
									<h2 className={classes.h2_title}>Последние новости</h2>
									{ this.renderLastArticles() }
								</div>
							</div>
						</div>

					</div>
					
					<div className={'container main__slider'}>
						<MainSlider data={this.state.content.mainSlider} />
					</div>
				</section>

				<LastetSection data={this.state.content.categories[1]}/>
				<SectionVideo data={this.state.content.categories[2]}/>
				{ this.state.content.categories[3] ? <LastetSection data={this.state.content.categories[3]} /> : ''}
				<MinifySection data={this.state.content.categories[4]} />
				<LastetSection data={this.state.content.categories[5]} />
				<MinifySection data={this.state.content.categories[6]} />
				<LastetSection data={this.state.content.categories[7]} />
				
			</div>
		)
	}

    componentDidMount() {	
		axios.get('//storage.ecomangystau.kz/api/home').then(res => {			

			this.setState({ content: {
				services: res.data.services,
				lastArticles: res.data.lastArticles,
				slides: res.data.slides,
				mainSlider: res.data.mainSlider,
				categories: res.data.categories,
				seo: res.data.seo
			} })

			this.setState({ isLoading: false })
			document.getElementsByTagName('body')[0].style.overflow = 'unset';
        })
	}
}

export default Home 