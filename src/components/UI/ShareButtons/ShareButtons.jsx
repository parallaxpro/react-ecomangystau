import React, {Component} from 'react'
import classes from './ShareButtons.module.sass'

class ShareButtons extends Component {

    openLink(e) {
        let href = e.target.dataset.href
        if (href.indexOf('https://wa.me/') === 0) window.open(href);
        else window.open(href, "Поделиться ссылкой", "width=500,height=500");
    }

    render() {
        return (
            <div className={classes.buttons}>
                <span onClick={this.openLink} data-href={'https://vk.com/share.php?url=' + window.location.href} className={classes.vk}></span>
                <span onClick={this.openLink} data-href={'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href} className={classes.fb}></span>
                <span onClick={this.openLink} data-href={'https://twitter.com/share?url='+ window.location.href +'&text='+ this.props.title +''} className={classes.twitter}></span>
                <span onClick={this.openLink} data-href={'https://telegram.me/share/url?url='+ window.location.href +'&text='+ this.props.title +''} className={classes.telegram}></span>
                <span onClick={this.openLink} data-href={'mailto:?subject='+ this.props.title +'&body='+ window.location.href +''} className={classes.email}></span>
                <span onClick={this.openLink} data-href={'https://connect.ok.ru/offer?url='+ window.location.href +'&title='+ this.props.title +'&description='+ this.props.desc +''} className={classes.ok}></span>
                <span onClick={this.openLink} data-href={'https://wa.me/?text='+ window.location.href +''} className={classes.whatsapp}></span>
            </div>
        )
    }
}

export default ShareButtons