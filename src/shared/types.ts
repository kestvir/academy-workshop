export type ServerResponse = {
  data: Array<ServerData>
}

export type ServerData = {
  id: number
  name: number
  username: number
  email: string
  address: {
    city: string
    street: string
    suite: string
    zipcode: string
    geo: {
      lat: number
      lng: number
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

export type TransformedUser = {
  id: number
  name: number
  username: number
  address: TransformedAddress
}

export type TransformedAddress = {
  city: string
  street: string
  suite: string
  zip: string
}
