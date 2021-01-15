import React, { Component } 	from 'react'
import ReactDOM 				from 'react-dom'
import './index.css'
import App 						from './App'
import reportWebVitals 			from './reportWebVitals'
import { BrowserRouter } 		from 'react-router-dom'
import Progress 				from './components/UI/NProgress/Progress'
import ReactGA 					from 'react-ga';

ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

class Index extends Component {
	state = {
		isLoading: true,
	}

	componentDidMount() {
		this.setState({ isLoading: false });
	}
	
	render() {
		return(
			<React.StrictMode>
				<BrowserRouter>
					<React.Fragment>
						<Progress isAnimating={this.state.isLoading} />
					</React.Fragment>
					<App />
				</BrowserRouter>
			</React.StrictMode>
		)
	}
}

ReactDOM.hydrate(<Index />, document.getElementById('root'));
reportWebVitals();