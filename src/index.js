import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
// import Progress from './components/UI/NProgress/Progress'

class Index extends Component {

	render() {
		return(
			<React.StrictMode>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</React.StrictMode>
		)
	}
}

ReactDOM.render(<Index />, document.getElementById('root'));
reportWebVitals();