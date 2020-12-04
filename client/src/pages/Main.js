import React, { useState } from 'react'
import './Main.css'

import NoteList from '../components/NoteList'
import NoteContainer from '../components/NoteContainer'

const NoteContext = React.createContext()

function Overview() {
	return <div>Overview, please select a note</div>
}

function Main({ match }) {
	const [noteData, setNoteData] = useState({
		notes: [],
	})

	return (
		<div className="d-flex">
			<NoteContext.Provider value={[noteData, setNoteData]}>
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
			</NoteContext.Provider>
		</div>
	)
}

export { Main, NoteContext }
