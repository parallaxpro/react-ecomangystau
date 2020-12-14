import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import classes from './Footer.module.sass'
import logo from '../../assets/logo.svg'

class Footer extends Component {
	render() {
		return(
			<footer className={classes.footer}>
                <div className={'container'}>
				    <div className={'row'}>
						<div className={'col-10 m-auto'}>
							<div className={classes.block}>
								<div className={classes.block_header}>
									<div className={classes.logotype}>
										<img src={logo} alt="Logotype"/>
									</div>
									<p className={classes.logotype_desc}>Неправительственное учреждение “Эко Мангистау”<br />— внепартийная, некоммерческая и не государственная организация.</p>
								</div>
								<div className={classes.block_footer}>
									<div className="row align-items-center">
										<div className="col-6">
											<p>Свяжитесь с нами: <a href="mailto:info@ecomangystau.kz">info@ecomangystau.kz</a></p>
										</div>
										<div className="col-6 justify-content-end d-flex">
											<a href="https://instagram.com/" rel="noopener noreferrer" target={'_blank'} className={classes.s_link}><div className={classes.i_facebook}></div></a>
											<a href="https://instagram.com/" rel="noopener noreferrer" target={'_blank'} className={classes.s_link}><div className={classes.i_instagram}></div></a>
											<a href="https://instagram.com/" rel="noopener noreferrer" target={'_blank'} className={classes.s_link}><div className={classes.i_yt}></div></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                </div>
			</footer>
		)
	}
}

export default Footer