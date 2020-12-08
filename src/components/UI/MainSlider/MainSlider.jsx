import React, {Component} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slide from "./Slide/Slide";

import classes from './MainSlider.module.sass'

const sliderSettings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
    slidesToScroll: 1,
    // swipeToSlide: true,
    fade: true,
    arrows: false,
    customPaging: i => (
        <div className={'dot'}></div>
    )
};

class MainSlider extends Component {
    render() {
        return(
            <Slider {...sliderSettings}>
                { this.props.data.map((slide, index) => {
                    return <div className={classes.slide} key={index}><Slide data={slide} /></div>
                }) }
            </Slider>
        )
    }
}

export default MainSlider