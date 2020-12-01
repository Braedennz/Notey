import React from 'react'
import './Main.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import NoteList from '../components/NoteList'
import Editor from '../components/Editor'

export default function Main() {
	return (
		<div className="d-flex">
			<div className="col-4 left-column">
				<div id="left-column">
					<NoteList />
				</div>
			</div>

			<div className="col-8">
				<div className="p-3">
					<div className="d-flex align-items-center justify-content-between">
						<div>
							<small className="text-muted">
								Tuesday, Nov 10, 8:00 pm - 8:30 pm
							</small>
							<h4>Test One</h4>
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
			</div>
		</div>
	)
}
