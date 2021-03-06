import React, { Component } from 'react'
import ModalVideo from 'react-modal-video'
import '../../../../node_modules/react-modal-video/scss/modal-video.scss'

import classes from './PostVideoMinify.module.sass'

class PostVideoMinify extends Component {
    
    state = { isOpen: false, setOpen: false }

    constructor (props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal () {
        this.setState({isOpen: true})
      }

    render() {
        return (
            <React.Fragment>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={ this.props.video } onClose={() => this.setState({isOpen: false})} />
                <span className={classes.block} onClick={this.openModal}>
                    <span className={ classes.icon }></span>
                    <h3 className={classes.title}>{this.props.title}</h3>
                    <img src={this.props.image} alt={this.props.title}/>
                </span>
            </React.Fragment>
        )
    }
}

export default PostVideoMinify