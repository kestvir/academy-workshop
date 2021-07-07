import axios from 'axios'
import { UserDto } from '../types/dtos/user'

export const getUsers = () => axios.get<Array<UserDto>>('http://jsonplaceholder.typicode.com/users')
