import axios from 'axios'

export const getTodos = () => axios.get('/api/todos')
export const postTodos = text => axios.post('/api/todos', { text })