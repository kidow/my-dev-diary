import axios from 'axios'

export default {
  read: () => axios.get('/'),
  insert: text => axios.post('/api/post', { text })
}