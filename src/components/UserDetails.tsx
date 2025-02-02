import { Component } from 'react'

type Props = { city: string; street: string; suite: string; zip: string }
type State = { isAddressVisible: boolean }

class UserDetails extends Component<Props, State> {
  state: Readonly<State> = {
    isAddressVisible: false,
  }

  toggleAddress = () => this.setState((state) => ({ isAddressVisible: !state.isAddressVisible }))

  render() {
    const { city, street, suite, zip } = this.props
    const { isAddressVisible } = this.state

    return (
      <>
        <button type="button" className="btn btn-sm btn-outline-primary mx-2" onClick={this.toggleAddress}>
          Toggle address
        </button>
        {isAddressVisible && (
          <ul>
            <li>City: {city}</li>
            <li>Street: {street}</li>
            <li>Suite: {suite}</li>
            <li>Zip code: {zip}</li>
          </ul>
        )}
      </>
    )
  }
}

export default UserDetails
