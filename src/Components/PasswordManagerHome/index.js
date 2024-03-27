import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

const colorList = ['green', 'yellow', 'grey', 'red', 'orange']

class PasswordManagerHome extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    isChecked: false,
  }

  deleteItem = id => {
    const {passwordList} = this.state

    const filteredList = passwordList.filter(eachItem => eachItem.id !== id)

    this.setState({
      passwordList: filteredList,
    })
  }

  noItems = () => (
    <div className="no-password-container">
      <img
        className="no-password-img"
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
      />
      <p className="no-item-desc">No Passwords</p>
    </div>
  )

  displayItem = () => {
    const {searchInput, passwordList, isChecked} = this.state
    const newList = passwordList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <ul>
        {newList.map(eachItem => (
          <PasswordItem
            deleteItem={this.deleteItem}
            key={eachItem.id}
            isChecked={isChecked}
            eachPassword={eachItem}
          />
        ))}
      </ul>
    )
  }

  submitForm = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const colorClass = colorList[Math.floor(Math.random() * colorList.length)]
    const newItem = {
      id: v4(),
      website,
      username,
      password,
      logoColor: colorClass,
    }

    this.setState(prevstate => ({
      passwordList: [...prevstate.passwordList, newItem],
      website: '',
      username: '',
      password: '',
    }))
  }

  showPassword = event => {
    if (event.target.checked) {
      this.setState({isChecked: true})
    } else {
      this.setState({isChecked: false})
    }
  }

  searchPassword = event => {
    this.setState({searchInput: event.target.value})
  }

  onWebsite = event => {
    this.setState({website: event.target.value})
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      passwordList,
      website,
      username,
      password,
      isChecked,
      searchInput,
    } = this.state
    const newList = passwordList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(passwordList)
    return (
      <div className="bg-container">
        <div className="outside-card">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="form-container">
            <form onSubmit={this.submitForm}>
              <h1 className="page-head">Add New Password</h1>
              <div className="form-input-container">
                <img
                  className="icons"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  onChange={this.onWebsite}
                  value={website}
                  type="text"
                  placeholder="Enter Website"
                />
              </div>
              <div className="form-input-container">
                <img
                  className="icons"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  onChange={this.onUsername}
                  value={username}
                  type="text"
                  placeholder="Enter Username"
                />
              </div>
              <div className="form-input-container">
                <img
                  className="icons"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  onChange={this.onPassword}
                  value={password}
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <button type="submit" className="form-button">
                Add
              </button>
            </form>
            <div className="password-manager-container">
              <img
                className="password-manager-img1"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
              />
              <img
                className="password-manager-img2"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
              />
            </div>
          </div>
          <div className="display-container">
            <div className="display-top-container">
              <div className="password-heading-container">
                <h1 className="your-password-heading">Your Passwords</h1>
                <p className="span-heading">{passwordList.length}</p>
              </div>
              <div className="input-container ">
                <img
                  className="icons"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <input
                  onChange={this.searchPassword}
                  value={searchInput}
                  type="search"
                  placeholder="Search"
                />
              </div>
            </div>
            <hr />
            <div className="show-password-container">
              <div className="password-label-container">
                <input
                  value={isChecked}
                  onChange={this.showPassword}
                  className="checkbox"
                  type="checkbox"
                  id="filterCheck"
                />
                <label htmlFor="filterCheck">Show passwords</label>
              </div>
            </div>
            {newList.length === 0 ? this.noItems() : this.displayItem()}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManagerHome
