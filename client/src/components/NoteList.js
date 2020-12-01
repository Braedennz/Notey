import React from 'react'

export default class NoteList extends React.Component {
	render() {
		const notesToday = [
			{
				title: 'Test One',
				time: '1:00 pm',
				active: true,
			},
			{
				title: 'Test Two',
				time: '2:00 pm',
				active: false,
			},
			{
				title: 'Test Three',
				time: '7:00 pm',
				active: false,
			},
			{
				title: 'Test Four',
				time: '9:00 pm',
				active: false,
			},
		]

		const notesThisWeek = [
			{
				title: 'Test One',
				time: '1:00 pm',
				active: false,
			},
			{
				title: 'Test Two',
				time: '2:00 pm',
				active: false,
			},
			{
				title: 'Test Three',
				time: '7:00 pm',
				active: false,
			},
			{
				title: 'Test Four',
				time: '9:00 pm',
				active: false,
			},
		]

		return (
			<div class="d-flex flex-column h-100">
				<div class="pt-3 px-2">
					<h3>My Notes</h3>
					<div>
						<span class="badge badge-primary mr-1">All Time</span>
						<span class="badge badge-light mr-1">Today</span>
						<span class="badge badge-light mr-1">This Week</span>
						<span class="badge badge-light">This Month</span>
					</div>
					<hr class="w-100" />
				</div>
				<div class="px-2 pb-2 overflow-auto">
					<h6>Today</h6>
					<ul class="list-group mb-3">
						{notesToday.map((note) => {
							return (
								<li
									className={
										'list-group-item list-group-item-action d-flex flex-column ' +
										(note.active ? 'active' : '')
									}
								>
									<small>{note.time}</small>
									<b>{note.title}</b>
								</li>
							)
						})}
					</ul>
					<h6>This Week</h6>
					<ul class="list-group">
						{notesThisWeek.map((note) => {
							return (
								<li
									className={
										'list-group-item list-group-item-action d-flex flex-column ' +
										(note.active ? 'active' : '')
									}
								>
									<small>{note.time}</small>
									<b>{note.title}</b>
								</li>
							)
						})}
					</ul>
				</div>
				<div id="new-note">
					<div class="create w-100">Create New Note</div>
				</div>
			</div>
		)
	}
}
