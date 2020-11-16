import React, {Component} from 'react'
import classes from './LastetSection.module.sass'

import Header from './Header/Header'

class LastetSection extends Component {
    render() {
        return (
            <section className={classes.block}>
                <div className="container">
                    <Header title={this.props.title} more={this.props.more} className={classes.head} />
                </div>
            </section>
        )
    }
}

export default LastetSection