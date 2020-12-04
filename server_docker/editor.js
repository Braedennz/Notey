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
		this.noteId = id

		note.findByPk(id)
			.then((note) => {
				this.socket.emit('setText', note.content)
			})
			.catch((error) => {
				console.log(e)
			})
	}

	updateText(data) {
		note.update(
			{ content: data },
			{
				where: {
					id: this.noteId,
				},
			}
		)
			.then((response) => {
				console.log('updated')
			})
			.catch((e) => {
				console.log(e)
			})
	}
}

module.exports = Editor
