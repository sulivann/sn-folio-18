import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';

import Redirect from '../components/redirect';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					{/* <Home path="/" /> */}
					<Redirect path="/osmo" to="https://sulivan.notion.site/Showcase-20b955d71d9e49958e24b03372593a21?pvs=4" />
					<Redirect path="/resume" to="https://sulivan.notion.site/Sulivan-Nguyen-12befbe8a3604ea592ed5e43b1f688d4?pvs=74" />
				</Router>
			</div>
		);
	}
}
