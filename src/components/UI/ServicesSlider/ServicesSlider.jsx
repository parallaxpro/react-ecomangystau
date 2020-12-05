import React, { Component } from 'react'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

import CategoryButton from '../CategoryButton/CategoryButton'

import classes from './ServicesSlider.module.sass'

class ServicesSlider extends Component {

    state = {
        servicesSlider: [],
    }

    render() {
        const params = {
            spaceBetween: 30,
            slidesPerView: 2,
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                1200: {
                    slidesPerView: 2,
                    watchOverflow: true
                }
            },
            onInit: (swiper) => {
                this.swiper = swiper
            }
        }

        return(
            <div className={classes.category_button}>
                <div className={'container'}>
                    <Swiper {...params}>
                        { this.state.servicesSlider.map((link, index) => {
                            return <SwiperSlide key={index}><CategoryButton title={link.name} subtitle={link.subname} to={link.url} /></SwiperSlide> 
                        }) }
                    </Swiper>
                </div>
            </div>           
        )
    }

    componentDidUpdate() {
        this.swiper.update();
    }

    componentDidMount() {
		axios.get('//ecomangystau-backend/api/menu/down').then(res => {			
			var $menu = res.data;
			this.setState({ servicesSlider: $menu.map((index) => {
				return index
			}) })
		})
	}
}

export default ServicesSlider