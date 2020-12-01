import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import Editor from './Editor'

export default function NoteContainer() {
	return (
		<div>
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
	)
}
