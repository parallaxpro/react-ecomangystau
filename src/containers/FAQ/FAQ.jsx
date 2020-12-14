import React, { Component } from 'react';
import axios from 'axios'

import categoryClasses  from '../Category/Category.module.sass'
import ShareButtons     from '../../components/UI/ShareButtons/ShareButtons'
import classes          from './FAQ.module.sass'
import Faq              from "react-faq-component";
import SEO 				from '../../components/SEO/SEO'
import Loader          from '../../components/Loaders/FAQ/FAQ'
import './FAQ.css'


class FAQ extends Component {

	constructor(props) {
		super(props)

		this.state = { isLoading: true }
	}

	componentDidMount() {		
		axios.get('//storage.ecomangystau.kz/api/eco-faq').then(res => {			
			this.setState({ rows: res.data })
			this.setState({ isLoading: false })
		})        
	}
	
	render() {
		if (this.state.isLoading) {
			document.getElementsByTagName('body')[0].style.overflow = 'hidden';
			return (
				<div className={classes.body}>
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
					<SEO data={ this.state.rows.seo } />
				{/* *** */}

				<div className={categoryClasses.header}>
					<div className={'container'}>
						<div className={'row align-items-end'}>
							<div className="col-md-10 m-auto">
								<div className="row align-items-center">
									<div className="col-lg-8">
										<h1 className={categoryClasses.title}>Эко-консультант</h1>
									</div>
									<div className="col-lg-4 justify-content-lg-end mt-4 mt-lg-0 d-flex">
										<ShareButtons title={'Эко-консультант'} desc={'Эко-консультант'} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={classes.body}>
					<div className="container faq-style-wrapper">
						<div className="row">
							<div className="col-md-10 m-auto">
								<Faq data={ this.state.rows } />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default FAQ 