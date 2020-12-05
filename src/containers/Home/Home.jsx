import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

import classes from './Home.module.sass'
import banner from '../../assets/images/banner.jpg'

import PostMinifyRow from '../../components/UI/PostMinifyRow/PostMinifyRow'
import LastetSection from '../../components/UI/LastetSection/LastetSection'
import MainSlider from '../../components/UI/MainSlider/MainSlider'
import SectionVideo from '../../components/UI/LastetSection/SectionVideo/SectionVideo'
import ServicesSlider from '../../components/UI/ServicesSlider/ServicesSlider'


class Home extends Component {
	render() {
		return (
			<div className={classes.home}>
				
				<section className={classes.bg_gradient}>

					<ServicesSlider />
					
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