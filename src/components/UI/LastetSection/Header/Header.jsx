import React, {Component} from 'react'
import classes from './Header.module.sass'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        const more = this.props.more
        return (
            <div className={classes.block}>
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h2 className={classes.h2_title}>{ this.props.title }</h2>
                    </div>
                    { more ? (
                        <div className="col-md-4 justify-content-md-end mt-3 mt-md-0 d-flex">
                            <Link to={ this.props.more } className={classes.button}>Посмотреть все</Link>
                        </div>
                    ) : ('') }
                </div>
            </div>
        )
    }
}

export default Header