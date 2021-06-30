import axios from 'axios'

export const getUsers = () => axios.get('http://jsonplaceholder.typicode.com/users')
