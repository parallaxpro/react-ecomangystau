import React, {Component} from 'react'
import classes from './LastetSection.module.sass'

import Header from './Header/Header'
import PostMinifyRow from '../PostMinifyRow/PostMinifyRow'
import PostMinifyColumn from '../PostColumn/PostColumn'

import image_1 from '../../../assets/images/1.jpg'
import image_2 from '../../../assets/images/2.jpg'
import image_3 from '../../../assets/images/3.jpg'

class LastetSection extends Component {
    render() {
        return (
            <section className={classes.section}>
                <div className={'container'}>
                    <Header title={this.props.title} more={this.props.more} />
                </div>
                <div className="container">
                    <div className={classes.body}>
                        <div className="row">
                            <div className="col-md-4">
                                <PostMinifyColumn to={'/'} image={image_1} title={'«Клуб ищущих работу — первы успехи»'} desc={'Вот и завершился первый курс для социальных работников Актауского центра занятости «Психология — стратегия примен...'} date={'25 октября 2020 год'}></PostMinifyColumn>
                            </div>
                            <div className="col-md-4">
                                <PostMinifyColumn to={'/'} image={image_2} title={'Продолжается реализация проекта «Зеленое лидерство в шк...'} desc={'К проекту присоединились школы партнеры — это СШ №6 и №23, школа-лицей №7 и Назарбаев Интелектуальная Школа.'} date={'25 октября 2020 год'}></PostMinifyColumn>
                            </div>
                            <div className="col-md-4">
                                <PostMinifyColumn to={'/'} image={image_3} title={'В Актау собирают макулатуру'} desc={'В Актау собирают макулатуру, чтобы благоустроить школьные дворы'} date={'25 октября 2020 год'}></PostMinifyColumn>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <PostMinifyRow to="/projects/page1" title={'Общественники продолжают работу по изучению лучших практик по содержани...'} subtitle={'Инициативы • 20 октября 2020 год'}></PostMinifyRow>
                        </div>
                        <div className="col-md-4">
                            <PostMinifyRow to="/projects/page1" title={'Общественники продолжают работу'} subtitle={'Инициативы • 20 октября 2020 год'}></PostMinifyRow>
                        </div>
                        <div className="col-md-4">
                            <PostMinifyRow to="/projects/page1" title={'Общественники продолжают работу по изучению лучших практик по содержани...'} subtitle={'Инициативы • 20 октября 2020 год'}></PostMinifyRow>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LastetSection