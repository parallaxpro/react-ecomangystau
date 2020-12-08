import React, { Component } from 'react'
import classes from './Page.module.sass'
import img from '../../assets/images/big_1.jpg'

import PageDesc from '../../components/Page/PageDesc/PageDesc'
import SeeAlso from '../../components/Page/SeeAlso/SeeAlso'

class Page extends Component {
    render() {
        return (
            <article className={classes.body}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <h1 className={classes.title}>Общественники продолжают работу по изучению лучших практик по содержанию и выгулу домашних животных в Казахстане</h1>
                            <PageDesc />
                        </div>
                    </div>
                    <div className={classes.article}>
                        <div className="row">
                            <div className="col-md-12">
                                <figure className={classes.img_preview}>
                                    <p><img src={img} alt={'123'}/></p>
                                </figure>
                            </div>
                            <div className="col-md-10 m-auto">
                                <p>Напомним, НПУ «Эко Мангистау» совместно с инициативной группой активистов, зоозащитников и волонтеров в рамках программы «Партнерство для инноваций», реализуемой АРГО при поддержке USAID ведет проект по разработке и продвижению нового проекта городских Правил содержания и выгула домашних животных.</p>
                            </div>
                            <div className="col-md-10 m-auto">
                                <p>В настоящий момент завершена работа по анализу городских Правил в 4 городах — Алматы, Нур-Султан, Атырау и Усть-Каменогорск.</p>
                            </div>
                            <div className="col-md-10 m-auto">
                                <p>Определено общее содержание Правил и принципиальные отличия. Лучшие аспекты будут приняты во внимание при подготовке Актауских городских Правил.</p>
                            </div>
                            <div className="col-md-10 m-auto">
                                <p>Напомним, НПУ «Эко Мангистау» совместно с инициативной группой активистов, зоозащитников и волонтеров в рамках программы «Партнерство для инноваций», реализуемой АРГО при поддержке USAID ведет проект по разработке и продвижению нового проекта городских Правил содержания и выгула домашних животных.</p>
                            </div>
                            <div className="col-md-10 m-auto">
                                <p>В настоящий момент завершена работа по анализу городских Правил в 4 городах — Алматы, Нур-Султан, Атырау и Усть-Каменогорск.</p>
                            </div>
                            <div className="col-md-10 m-auto">
                                <p>Определено общее содержание Правил и принципиальные отличия. Лучшие аспекты будут приняты во внимание при подготовке Актауских городских Правил.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <PageDesc />
                        </div>
                    </div>
                </div>
                <SeeAlso />
            </article>
        )
    }
}

export default Page