const note = require('./db/models').Note

class Editor {
	constructor(socket) {
		this.socket = socket
		;['loadNoteById', 'updateText'].forEach((element) => {
			socket.on(element, (data) => {
				this[element](data)
			})
		})
	}

	loadNoteById(id) {
		return note
			.findByPk(id)
			.then((note) => {
				this.socket.emit('setText', JSON.stringify(note.content))
			})
			.catch((error) => {})
	}

	updateText(data) {
		console.log(JSON.stringify(data))
	}
}

module.exports = Editor
