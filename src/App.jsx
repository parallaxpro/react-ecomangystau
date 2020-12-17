import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'
import Category from './containers/Category/Category'
import FAQ from './containers/FAQ/FAQ'
import Page from './containers/Page/Page'
import Services from './containers/Services/Services'
import ServicePage from './containers/ServicePage/ServicePage'
import classes from './App.module.sass'
import Search from './containers/Search/Search'
import NotFound from './containers/404/404';

class App extends Component {
	render() {
		return(
			<Layout className={classes.App}>
				<Switch>
					<Route exact path="/" 			component={Home} />
					<Route path="/eco-faq" 			component={FAQ} />
					<Route path="/search/" 			component={Search} />
					<Route path="/services/:page" 	component={ServicePage} />
					<Route path="/services/" 		component={Services} />
					<Route path="/:category/:page" 	component={Page} />
					<Route path="/:category" 		component={Category} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		)
	}
}

export default App;
