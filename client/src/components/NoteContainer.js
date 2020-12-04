import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import { useContext } from 'react'
import { RouteContext } from '../pages/Main'

import Editor from './Editor'
import api from '../api'

export default function NoteContainer() {
	const { params } = useContext(RouteContext)

	const [noteData, setNoteData] = useState({
		currentNote: null,
		loading: false,
	})

	useEffect(() => {
		setNoteData({ loading: true, currentNote: null })

		api.getNoteById(params.id)
			.then((res) => res.json())
			.then((note) => {
				setNoteData({ loading: false, currentNote: note.data })
			})
			.catch((err) => {
				setNoteData({ loading: false, currentNote: null })
			})
	}, [])

	const { loading, currentNote } = noteData

	if (loading) {
		return <div>Loading</div>
	}

	if (!currentNote) {
		return <div>Nothing</div>
	}

	return (
		<div>
			<div className="d-flex align-items-center justify-content-between">
				<div>
					<small className="text-muted">
						{currentNote.createdAt}
					</small>
					<h4>{currentNote.title}</h4>
				</div>
				<FontAwesomeIcon
					className="text-secondary"
					icon={faEllipsisV}
					style={{ height: '12px' }}
				/>
			</div>

			<div className="d-flex align-items-center">
				<div className="person d-flex align-items-center">
					<div className="image mr-2">
						<img src="https://s3.ca-central-1.amazonaws.com/fellow.assets/public/user/66745/image.66745-2020-11-10T095135.5945960000.zK6XQiGTBRfPL5MXwyo8rs4G_EFb83kg0ATUn.png" />
					</div>
				</div>
				<small>
					<a href="#">Invite Others</a>
				</small>
			</div>

			<div className="card mt-3">
				<div className="card-body">
					<Editor />
				</div>
			</div>
		</div>
	)
}
