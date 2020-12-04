import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { RouteContext } from '../pages/Main'
import { useContext } from 'react'

export default function NoteList() {
	const { params } = useContext(RouteContext)

	const [notesData, setNotesData] = useState({
		loading: false,
		notes: [],
		error: null,
	})

	function createNote() {
		const newNote = {
			id: Math.random(),
			title: 'Untitled Note',
			time: new Date(),
		}

		setNotesData({ loading: false, notes: [...notesData.notes, newNote] })
	}

	useEffect(() => {
		const apiUrl = `http://localhost:8080/api/notes/`

		setNotesData({ loading: true, notes: [] })

		fetch(apiUrl)
			.then((res) => res.json())
			.then((repos) => {
				setNotesData({ loading: false, notes: repos.data })
			})
			.catch((err) => {
				setNotesData({ loading: false, error: 'No good' })
			})
	}, [])

	const { loading, notes, error } = notesData

	if (loading) {
		return <div>Loading</div>
	}

	if (error) {
		return <div>error</div>
	}

	return (
		<div className="d-flex flex-column h-100">
			<div className="pt-3 px-2">
				<h3>My Notes</h3>
				<div>
					<span className="badge badge-primary mr-1">All Time</span>
					<span className="badge badge-light mr-1">Today</span>
					<span className="badge badge-light mr-1">This Week</span>
					<span className="badge badge-light">This Month</span>
				</div>
				<hr className="w-100" />
			</div>
			<div className="h-100 px-2 pb-2 overflow-auto">
				<h6>All Notes</h6>
				<ul className="list-group mb-3">
					{notes.map((note) => {
						return (
							<li
								className={
									'list-group-item list-group-item-action ' +
									(note.id == params.id ? 'active' : '')
								}
								key={note.id}
							>
								<Link
									to={'/notes/' + note.id}
									className="d-flex flex-column"
								>
									<small>{note.createdAt}</small>
									<b>{note.title}</b>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
			<div id="new-note">
				<div className="create w-100" onClick={createNote}>
					Create New Note
				</div>
			</div>
		</div>
	)
}
