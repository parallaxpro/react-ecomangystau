import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classes from './Slide.module.sass'
import img from '../../../../assets/images/hand.jpg'

class MainSlide extends Component {
	render() {
		return (
			<div className={'row'}>
				<div className={'col-8'}>
					<div className={classes.body}>
						<div className={classes.category_block}>
							<Link to={'/category1'} className={classes.category}>Экологическое образование</Link>
						</div>
						<div className={classes.title_block}>
							<Link to={'/'} className={classes.title}>Концепция «ЭКОЛОГО-ОБРАЗОВАТЕЛЬНЫЙ ЦЕНТР ПОДДЕРЖКИ ДИКИМ И БЕ...</Link>
							<p className={classes.desc}>Инициативная группа НПУ «ЭкоМангистау», ОФ «Шанс», ОО ЦРП «Ковчег» подготовили Концепцию планируемого Эколого-образовате...</p>
						</div>
					</div>
				</div>
				<div className={'col-4'}>
					<div className={classes.image_block}>
						<Link to={'/'} className={classes.image}>
							<img src={img} alt="slide"/>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default MainSlide