import React, { Component } from 'react'
import classes from './Gallery.module.sass'
import Image from "react-modal-image";

class Gallery extends Component {
    render() {
        
        if (!this.props.images) return ''

        return (
            <div className={classes.block}>
                <h2 className={classes.title}>Галерея</h2>
                <div className="row">

                    { this.props.images.map((image, index) => {
                        return (
                            <div className={'col-md-3'} key={index}>
                                <figure className={classes.image}>
                                    <p><Image small={ image.url } large={ image.url } alt={ this.props.title } /></p>
                                </figure>
                            </div>
                        )
                    }) }
                
                </div>
            </div>
        )
    }
}

export default Gallery