import { AddressModel } from './address'

export type UserModel = {
  id: number
  name: string
  username: string
  address: AddressModel
}
