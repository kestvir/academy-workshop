export type UserDto = {
  id: number
  name: string
  username: string
  email: string
  address: {
    city: string
    street: string
    suite: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  websitw: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
