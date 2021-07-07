import { UserDto } from '../../types/dtos/user'
import { UserModel } from '../../types/models/user'

const transformUser = (user: UserDto) => ({
  id: user.id,
  username: user.username,
  name: user.name,
  address: {
    city: user.address.city,
    street: user.address.street,
    suite: user.address.suite,
    zip: user.address.zipcode,
  },
})

export const transformUsers = (users: Array<UserDto>): Array<UserModel> => users.map(transformUser)
