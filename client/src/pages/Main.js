import React from 'react'
import './Main.css'

import NoteList from '../components/NoteList'
import NoteContainer from '../components/NoteContainer'

const RouteContext = React.createContext()

function Overview() {
	return <div>Overview, please select a note</div>
}

function Main({ match }) {
	return (
		<div className="d-flex">
			<RouteContext.Provider value={match}>
				<div className="col-4 left-column">
					<div id="left-column">
						<NoteList />
					</div>
				</div>

				<div className="col-8">
					<div className="p-3">
						{match.params.id ? <NoteContainer /> : <Overview />}
					</div>
				</div>
			</RouteContext.Provider>
		</div>
	)
}

export { Main, RouteContext }
