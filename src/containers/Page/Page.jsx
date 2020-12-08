import React, { Component } from 'react'
import classes from './Page.module.sass'
import img from '../../assets/images/big_1.jpg'

import ShareButtons from '../../components/UI/ShareButtons/ShareButtons'

class Page extends Component {
    render() {
        return (
            <article className={classes.body}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <h1 className={classes.title}>Общественники продолжают работу по изучению лучших практик по содержанию и выгулу домашних животных в Казахстане</h1>
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <p className={classes.desc}>Опубликовано в <a href="/">Инициативы</a> • 25 окт. 2020 год</p>
                                </div>
                                <div className="col-md-4 justify-content-end d-flex">
                                    <ShareButtons data={this.props.data} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <figure className={classes.img_preview}>
                                <p><img src={img} alt={'123'}/></p>
                            </figure>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

export default Page