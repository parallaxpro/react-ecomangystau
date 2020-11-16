import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import Progress from './components/UI/NProgress/Progress'

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

ReactDOM.render(<Index />, document.getElementById('root'));
reportWebVitals();