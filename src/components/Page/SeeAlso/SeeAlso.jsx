import React, { Component } from 'react'

import Header from '../../UI/LastetSection/Header/Header'
import PostColumn from '../../UI/PostColumn/PostColumn'

import classes from './SeeAlso.module.sass'
import image_1 from '../../../assets/images/1.jpg'

class SeeAlso extends Component {
    render() {
        return(
            <section className={classes.section}>
                <div className={'container'}>
                    <Header title={'Смотреть так же'} />
                </div>
                <div className={'container'}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className={classes.post}>
                                <PostColumn to={'/'} image={image_1} title={'«Клуб ищущих работу — первы успехи»'} desc={'Вот и завершился первый курс для социальных работников Актауского центра занятости «Психология — стратегия примен...'} date={'25 октября 2020 год'}></PostColumn>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={classes.post}>
                                <PostColumn to={'/'} image={image_1} title={'«Клуб ищущих работу — первы успехи»'} desc={'Вот и завершился первый курс для социальных работников Актауского центра занятости «Психология — стратегия примен...'} date={'25 октября 2020 год'}></PostColumn>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={classes.post}>
                                <PostColumn to={'/'} image={image_1} title={'«Клуб ищущих работу — первы успехи»'} desc={'Вот и завершился первый курс для социальных работников Актауского центра занятости «Психология — стратегия примен...'} date={'25 октября 2020 год'}></PostColumn>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={classes.post}>
                                <PostColumn to={'/'} image={image_1} title={'«Клуб ищущих работу — первы успехи»'} desc={'Вот и завершился первый курс для социальных работников Актауского центра занятости «Психология — стратегия примен...'} date={'25 октября 2020 год'}></PostColumn>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={classes.post}>
                                <PostColumn to={'/'} image={image_1} title={'«Клуб ищущих работу — первы успехи»'} desc={'Вот и завершился первый курс для социальных работников Актауского центра занятости «Психология — стратегия примен...'} date={'25 октября 2020 год'}></PostColumn>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={classes.post}>
                                <PostColumn to={'/'} image={image_1} title={'«Клуб ищущих работу — первы успехи»'} desc={'Вот и завершился первый курс для социальных работников Актауского центра занятости «Психология — стратегия примен...'} date={'25 октября 2020 год'}></PostColumn>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SeeAlso