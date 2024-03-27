import './index.css'

const PasswordItem = props => {
  const {eachPassword, isChecked, deleteItem} = props
  const {id, website, username, password, logoColor} = eachPassword

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="password-container">
        <div className={`profile-logo ${logoColor}`}>
          <h1 className="user-logo">{website[0].toUpperCase()}</h1>
        </div>
        <div className="details-container">
          <p className="user-detail">{website}</p>
          <p className="user-detail">{username}</p>
          {!isChecked && (
            <img
              className="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
          {isChecked && <p className="user-detail">{password}</p>}
        </div>
        <div className="btn-container">
          <button
            type="button"
            data-testid="delete"
            onClick={onDelete}
            className="delete-btn"
          >
            <img
              className="delete-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default PasswordItem
