import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
	return (
		<div id="sidebar">
			<nav className="w-100">
				<ul>
					<li>
						<a href="#">
							<img src="https://s3.ca-central-1.amazonaws.com/fellow.assets/public/user/66745/image.66745-2020-11-10T095135.5945960000.zK6XQiGTBRfPL5MXwyo8rs4G_EFb83kg0ATUn.png" />
						</a>
					</li>
					<li className="active mt-3">
						<a href="#">
							<FontAwesomeIcon icon={faHome} />
						</a>
					</li>
					<li className="mt-3">
						<a href="#">
							<FontAwesomeIcon icon={faSearch} />
						</a>
					</li>
				</ul>
			</nav>
			<nav className="w-100">
				<ul>
					<li className="mt-3">
						<a href="#">
							<FontAwesomeIcon icon={faCog} />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
