import React, {Component} from 'react'

import PostVideoMinify from '../../PostVideoMinify/PostVideoMinify'
import Header from '../Header/Header'

import classes from './SectionVideo.module.sass'
import image_1 from '../../../../assets/images/4.jpg'
import image_2 from '../../../../assets/images/5.jpg'
import image_3 from '../../../../assets/images/6.jpg'

class Video extends Component {
    render() {
        return(
            <section className={classes.section}>
                <div className={'container'}>
                    <Header title={this.props.title} more={this.props.more} />
                </div>
                <div className="container">
                    <div className={classes.body}>
                        <div className="row">
                            <div className="col-md-4">
                                <PostVideoMinify image={image_1} title={'КИРИЛЛ ОСИН: Нужна проверка, так как ТОО «Caspian Oil Trans» ...'} video={'S1eebleLWeE'}></PostVideoMinify>
                            </div>
                            <div className="col-md-4">
                                <PostVideoMinify image={image_2} title={'КИРИЛЛ ОСИН: Нужна проверка, так как ТОО «Caspian Oil Trans» ...'} video={'S1eebleLWeE'}></PostVideoMinify>
                            </div>
                            <div className="col-md-4">
                                <PostVideoMinify image={image_3} title={'КИРИЛЛ ОСИН: Нужна проверка, так как ТОО «Caspian Oil Trans» ...'} video={'S1eebleLWeE'}></PostVideoMinify>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Video