import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import About from './containers/About/About'
import Home from './containers/Home/Home'
import Friends from './containers/Friends/Friends'
import Category from './containers/Category/Category'
import Page from './containers/Page/Page'

import classes from './App.module.sass'

class App extends Component {
	render() {
		return(
			<Layout className={classes.App}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/friends" component={Friends} />
					<Route path="/:category/:page" component={Page} />
					<Route path="/:category" component={Category} />
				</Switch>
			</Layout>
		)
	}
}

export default App;
