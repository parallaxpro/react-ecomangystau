import React, { Component } from 'react'
import classes from './Search.module.sass'

class Search extends Component {
    render() {
        return(
            <div className={classes.container}>
                <input type="search" placeholder={'Поиск...'} />
            </div>
        )
    }
}

export default Search