import axios from 'axios'
import { ServerResponse } from '../shared/types'

export const getUsers = (): Promise<ServerResponse> => axios.get('http://jsonplaceholder.typicode.com/users')
