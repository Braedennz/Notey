import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from '../api'
import { NoteContext } from '../pages/Main'

import Editor from './Editor'
import NoteContainerHeader from './NoteContainerHeader'

export default function NoteContainer() {
	const { id } = useParams()

	const [currentNoteData, setCurrentNoteData] = useState({
		currentNote: null,
		loading: false,
	})

	const [noteData, setNoteData] = useContext(NoteContext)

	function loadNoteDataById() {
		setCurrentNoteData({ loading: true, currentNote: null })

		api.getNoteById(id)
			.then((res) => res.json())
			.then((note) => {
				setCurrentNoteData({ loading: false, currentNote: note.data })
			})
			.catch((err) => {
				setCurrentNoteData({ loading: false, currentNote: null })
			})
	}

	useEffect(() => {
		loadNoteDataById()
	}, [id])

	function updateCurrentNote(data) {
		api.updateNote(currentNote.id, data)
			.then((response) => {
				setCurrentNoteData({
					currentNote: {
						...currentNote,
						...data,
					},
				})

				let notes = [...noteData.notes]
				let noteIndex = notes.findIndex((n) => n.id == id)

				notes[noteIndex] = { ...notes[noteIndex], ...data }

				setNoteData({ notes: notes })
			})
			.catch((e) => {
				console.log(e)
			})
	}

	const { loading, currentNote } = currentNoteData

	if (loading) {
		return <div>Loading</div>
	}

	if (!currentNote) {
		return <div>Nothing</div>
	}

	return (
		<div>
			<NoteContainerHeader
				currentNote={currentNote}
				updateCurrentNote={updateCurrentNote}
			/>

			<div className="card mt-3">
				<div className="card-body">
					<Editor notedata={currentNote} />
				</div>
			</div>
		</div>
	)
}
