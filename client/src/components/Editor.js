import React, { useEffect } from 'react'

import Quill from 'quill'
import 'quill/dist/quill.snow.css'

import { io } from 'socket.io-client'

function Editor() {
	useEffect(() => {
		const socket = io('localhost:4000', {
			transports: ['websocket', 'polling', 'flashsocket'],
		})

		const options = {
			theme: 'snow',
			modules: {
				toolbar: '#toolbar',
			},
		}

		let quill = new Quill('#editor', options)

		/**
		 * On Initialising if data is present in server
		 * Updaing its content to editor
		 */
		socket.on('set-text', (data) => {
			quill.setContents(JSON.parse(data))
		})

		/** listening to changes in the document
		 * that is coming from our server
		 */
		socket.on('updated-text', (data) => {
			if (!data) {
				return
			}

			quill.updateContents(JSON.parse(data))
		})

		/**
		 * On Text change publishing to our server
		 * so that it can be broadcasted to all other clients
		 */
		quill.on('text-change', function (delta, oldDelta, source) {
			if (source !== 'user') return

			let text = quill.getContents().ops

			socket.emit('update-text', text)
		})

		return () => socket.disconnect()
	}, [])

	return (
		<div>
			<div id="toolbar">
				<span className="ql-formats">
					<select className="ql-font"></select>
					<select className="ql-size"></select>
				</span>
				<span className="ql-formats">
					<button className="ql-bold"></button>
					<button className="ql-italic"></button>
					<button className="ql-underline"></button>
					<button className="ql-strike"></button>
				</span>
				<span className="ql-formats">
					<select className="ql-color"></select>
					<select className="ql-background"></select>
				</span>
				<span className="ql-formats">
					<button className="ql-script" value="sub"></button>
					<button className="ql-script" value="super"></button>
				</span>
				<span className="ql-formats">
					<button className="ql-header" value="1"></button>
					<button className="ql-header" value="2"></button>
					<button className="ql-blockquote"></button>
					<button className="ql-code-block"></button>
				</span>
				<span className="ql-formats">
					<button className="ql-list" value="ordered"></button>
					<button className="ql-list" value="bullet"></button>
					<button className="ql-indent" value="-1"></button>
					<button className="ql-indent" value="+1"></button>
				</span>
				<span className="ql-formats">
					<button className="ql-link"></button>
					<button className="ql-image"></button>
					<button className="ql-video"></button>
					<button className="ql-formula"></button>
				</span>
				<span className="ql-formats">
					<button className="ql-clean"></button>
				</span>
			</div>
			<div id="editor"></div>
		</div>
	)
}

export default Editor
