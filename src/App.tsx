import { useEffect, useState } from 'react'

import UserDetails from './components/UserDetails'
import { getUsers } from './data/apiCalls'
import { transformUsers } from './data/transformers'

import { TransformedUser } from './shared/types'

const App: React.FC = () => {
  const [userList, setUserList] = useState<TransformedUser[] | null>(null)

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = (await getUsers()).data
        const transformedResponse = transformUsers(response)

        setUserList(transformedResponse)
      } catch (error) {
        console.log(error)
      }
    }

    getUserData()
  }, [])

  const renderUser = ({ id, username, name, address }: TransformedUser) => {
    return (
      <li className="list-group-item" key={id}>
        <h3 className="d-inline">
          {name} <small className="text-muted">({username})</small>
        </h3>
        <UserDetails {...address} />
      </li>
    )
  }

  return (
    <div className="container">
      <ul className="list-group mt-4">{userList?.map(renderUser)}</ul>
    </div>
  )
}

export default App
