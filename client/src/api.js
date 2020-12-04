const api = 'http://localhost:8080/api'

export const getAllNotes = () => fetch(`${api}/notes`)
export const getNoteById = (id) => fetch(`${api}/notes/${id}`)

export default {
	getAllNotes,
	getNoteById,
}
