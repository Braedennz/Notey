import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from '../api'

import Editor from './Editor'
import NoteContainerHeader from './NoteContainerHeader'

export default function NoteContainer() {
	const { id } = useParams()

	const [noteData, setNoteData] = useState({
		currentNote: null,
		loading: false,
	})

	function loadNoteDataById() {
		setNoteData({ loading: true, currentNote: null })

		api.getNoteById(id)
			.then((res) => res.json())
			.then((note) => {
				setNoteData({ loading: false, currentNote: note.data })
			})
			.catch((err) => {
				setNoteData({ loading: false, currentNote: null })
			})
	}

	useEffect(() => {
		loadNoteDataById()
	}, [id])

	const { loading, currentNote } = noteData

	if (loading) {
		return <div>Loading</div>
	}

	if (!currentNote) {
		return <div>Nothing</div>
	}

	return (
		<div>
			<NoteContainerHeader currentNote={currentNote} />

			<div className="card mt-3">
				<div className="card-body">
					<Editor notedata={currentNote} />
				</div>
			</div>
		</div>
	)
}
