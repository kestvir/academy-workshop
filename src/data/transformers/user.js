const transformUser = (user) => ({
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

export const transformUsers = (users) => users.map(transformUser)
