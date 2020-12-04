const api = 'http://localhost:8080/api'

export const getAllNotes = () => fetch(`${api}/notes`)
export const getNoteById = (id) => fetch(`${api}/notes/${id}`)
export const createNote = (data) => {
	return fetch(`${api}/notes`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	})
}
export const updateNote = (id, data) => {
	return fetch(`${api}/notes/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	})
}

export default {
	getAllNotes,
	getNoteById,
	createNote,
	updateNote,
}
