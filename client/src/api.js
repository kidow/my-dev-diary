import axios from 'axios'

export const getTodos = () => axios.get('/api/todos')
export const postTodos = ({text, learned}) => axios.post('/api/todos', { text, learned })