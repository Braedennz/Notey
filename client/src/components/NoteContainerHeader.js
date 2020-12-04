import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import api from '../api'

function TextTitle({ title, editTitle }) {
	return <h4 onClick={editTitle}>{title}</h4>
}

function InputTitle({ noteTitle, handleChange, cancelChanges, saveChanges }) {
	return (
		<div className="input-group mb-3">
			<input
				type="text"
				className="form-control"
				value={noteTitle}
				onChange={handleChange}
			/>
			<div className="input-group-append">
				<button
					className="btn btn-outline-secondary"
					type="button"
					onClick={cancelChanges}
				>
					Cancel
				</button>
				<button
					className="btn btn-outline-secondary"
					type="button"
					onClick={saveChanges}
				>
					Save
				</button>
			</div>
		</div>
	)
}

export default function NoteContainerHeader({
	currentNote,
	updateCurrentNote,
}) {
	const [isEditing, setEditing] = useState(false)
	const [noteTitle, setNoteTitle] = useState(currentNote.title)

	function editTitle() {
		setEditing(true)
	}

	function handleTitleChange(e) {
		setNoteTitle(e.target.value)
	}

	function cancelTitleChanges() {
		setNoteTitle(currentNote.title)
		setEditing(false)
	}

	function saveTitle() {
		setEditing(false)

		let updatedNoteData = {
			title: noteTitle,
		}

		api.updateNote(currentNote.id, updatedNoteData)
			.then((response) => {
				console.log(response)

				updateCurrentNote(updatedNoteData)
			})
			.catch((e) => {
				console.log(e)
			})
	}

	return (
		<div>
			<div className="d-flex align-items-center justify-content-between">
				<div className="flex-fill mr-3">
					<small className="text-muted d-block mb-1">
						{currentNote.createdAt}
					</small>

					{isEditing ? (
						<InputTitle
							noteTitle={noteTitle}
							handleChange={handleTitleChange}
							cancelChanges={cancelTitleChanges}
							saveChanges={saveTitle}
						/>
					) : (
						<TextTitle
							title={currentNote.title}
							editTitle={editTitle}
						/>
					)}
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
		</div>
	)
}
