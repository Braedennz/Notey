import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'

import Moment from 'moment'
import api from '../api'

import { NoteContext } from '../pages/Main'

export default function NoteList() {
	const { id } = useParams()
	const history = useHistory()

	const [listStatusData, setListStatusData] = useState({
		loading: false,
		error: null,
	})

	const [noteData, setNoteData] = useContext(NoteContext)

	function createNote() {
		api.createNote({
			title: 'Untitled Note',
			content: null,
		})
			.then((res) => res.json())
			.then((response) => {
				let newNoteData = response.data

				setNoteData({
					notes: [newNoteData, ...noteData.notes],
				})

				history.push('/notes/' + newNoteData.id)
			})
			.catch((e) => {
				console.log(e)
			})
	}

	useEffect(() => {
		setListStatusData({ loading: true })

		api.getAllNotes()
			.then((res) => res.json())
			.then((repos) => {
				setListStatusData({ loading: false })
				setNoteData({ notes: repos.data })
			})
			.catch((err) => {
				setListStatusData({ loading: false, error: 'No good' })
			})
	}, [])

	const { loading, error } = listStatusData
	const { notes } = noteData

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
									(note.id == id ? 'active' : '')
								}
								key={note.id}
							>
								<Link
									to={'/notes/' + note.id}
									className="d-flex flex-column"
								>
									<small>
										{Moment(note.createdAt).format('d MMM')}
									</small>
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
