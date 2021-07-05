import { ServerData, TransformedUser } from '../../shared/types'

const transformUser = (user: ServerData) => ({
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

export const transformUsers = (users: ServerData[]): TransformedUser[] => users.map(transformUser)
