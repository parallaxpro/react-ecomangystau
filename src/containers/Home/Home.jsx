import React, { Component } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

import classes from './Home.module.sass'

import PostMinifyRow from '../../components/UI/PostMinifyRow/PostMinifyRow'
import LastetSection from '../../components/UI/LastetSection/LastetSection'
import MainSlider from '../../components/UI/MainSlider/MainSlider'
import SectionVideo from '../../components/UI/LastetSection/SectionVideo/SectionVideo'
import ServicesSlider from '../../components/UI/ServicesSlider/ServicesSlider'
import HomeLoader from '../../components/Loaders/Home/Home'


class Home extends Component {
	state = {
        content: {
			services: [],
			slides: [],
			lastArticles: [],
			mainSlider: [],
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

		document.getElementsByTagName('body')[0].style.overflow = 'hidden';

		return (
			this.state.isLoading ?
				<section className={classes.bg_gradient}>
					<div className="container">
						<HomeLoader />
					</div>
				</section>
			:
			<div className={classes.home}>
				
				<section className={classes.bg_gradient}>

					<ServicesSlider data={this.state.content.services} />
					
					<div className={classes.second}>
						<div className={'container'}>
							<div className={'row'}>
								<div className={'col-md-8'}>
									<div className={classes.banner_slider}>
										<Swiper slidesPerView={1}>
											{ this.state.content.slides.map((slide, index) => {
												return <SwiperSlide key={index}><a href={slide.link} className={classes.banner}><img src={slide.image} alt={slide.name} /></a></SwiperSlide> 
											}) }
										</Swiper>
									</div>
								</div>
								<div className={'col-md-4'}>
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

				<LastetSection title={'Гражданское образование'} more={'/'}></LastetSection>
				<SectionVideo title={'Видео'} more={'/'}></SectionVideo>
				<LastetSection title={'Инциативы'} more={'/'}></LastetSection>
				
			</div>
		)
	}

    componentDidMount() {
		axios.get('//ecomangystau-backend/api/home').then(res => {			
			// console.log(res.data);

			this.setState({ content: {
				services: res.data.services,
				lastArticles: res.data.lastArticles,
				slides: res.data.slides,
				mainSlider: res.data.mainSlider,
			} })

			this.setState({ isLoading: false })

			document.getElementsByTagName('body')[0].style.overflow = 'unset';
        })        
	}
}

export default Home 