import React, {Component} from 'react'
import classes from './ShareButtons.module.sass'

class ShareButtons extends Component {
    render() {
        return (
            <div className={classes.buttons}>
                <span data-href={'https://vk.com'} className={classes.vk}></span>
                <span data-href={'https://vk.com'} className={classes.fb}></span>
                <span data-href={'https://vk.com'} className={classes.twitter}></span>
                <span data-href={'https://vk.com'} className={classes.telegram}></span>
                <span data-href={'https://vk.com'} className={classes.email}></span>
                <span data-href={'https://vk.com'} className={classes.ok}></span>
                <span data-href={'https://vk.com'} className={classes.whatsapp}></span>
            </div>
        )
    }
}

export default ShareButtons