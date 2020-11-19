import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

import classes from './Home.module.sass'
import banner from '../../assets/images/banner.jpg'

import CategoryButton from '../../components/UI/CategoryButton/CategoryButton'
import PostMinifyRow from '../../components/UI/PostMinifyRow/PostMinifyRow'
import LastetSection from '../../components/UI/LastetSection/LastetSection'
import MainSlider from '../../components/UI/MainSlider/MainSlider'
import SectionVideo from '../../components/UI/LastetSection/SectionVideo/SectionVideo'

class Home extends Component {

	render() {
		return (
			<div className={classes.home}>
				
				<section className={classes.bg_gradient}>
					<div className={classes.category_button}>
						<div className={'container'}>
							<Swiper spaceBetween={30} slidesPerView={4} breakpoints={{0: {slidesPerView: 1,},576: {slidesPerView: 2,},1024: {slidesPerView: 3,},1200: {slidesPerView: 4,watchOverflow: true}}}>
								<SwiperSlide><CategoryButton title={'Наши проекты'} subtitle={'93 записей'} to={'projects'} /></SwiperSlide>
								<SwiperSlide><CategoryButton title={'Наши проекты'} subtitle={'93 записей'} to={'eco'} /></SwiperSlide>
								<SwiperSlide><CategoryButton title={'Наши проекты'} subtitle={'93 записей'} to={'projects-1'} /></SwiperSlide>
								<SwiperSlide><CategoryButton title={'Наши проекты'} subtitle={'93 записей'} to={'projects-2'} /></SwiperSlide>
							</Swiper>
						</div>
					</div>
					<div className={classes.second}>
						<div className={'container'}>
							<div className={'row'}>
								<div className={'col-md-8'}>
									<div className={classes.banner_slider}>
										<Swiper slidesPerView={1}>
											<SwiperSlide><Link to="/" className={classes.banner}><img src={banner} alt={'Баннер'} /></Link></SwiperSlide>
										</Swiper>
									</div>
								</div>
								<div className={'col-md-4'}>
									<h2 className={classes.h2_title}>Последние новости</h2>
									<PostMinifyRow to="/projects/page1" title={'Общественники продолжают работу по изучению лучших практик по содержани...'} subtitle={'Инициативы • 20 октября 2020 год'} />
									<PostMinifyRow to="/" title={'Общественники продолжают работу по изучению лучших практик по содержани...'} subtitle={'Инициативы • 20 октября 2020 год'} />
									<PostMinifyRow to="/" title={'Общественники продолжают работу по изучению лучших практик по содержани...'} subtitle={'Инициативы • 20 октября 2020 год'} />
								</div>
							</div>
						</div>
					</div>
					
					<div className={'container main__slider'}>
						<MainSlider />
					</div>
					
				</section>

				<LastetSection title={'Гражданское образование'} more={'/'}></LastetSection>
				<SectionVideo title={'Видео'} more={'/'}></SectionVideo>
				<LastetSection title={'Инциативы'} more={'/'}></LastetSection>
				
			</div>
		)
	}
}

export default Home 