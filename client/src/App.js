import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import { Main } from './pages/Main'

export default function App() {
	return (
		<div className="d-flex">
			<Sidebar />
			<div id="app-container">
				<Switch>
					<Route path="/" component={Main} exact />
					<Route path="/notes/:id" component={Main} />
				</Switch>
			</div>
		</div>
	)
}
