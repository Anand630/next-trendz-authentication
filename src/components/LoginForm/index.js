import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', loginError: false, errorMessage: ''}

  onUsernameInput = e => this.setState({username: e.target.value})

  onPasswordInput = e => this.setState({password: e.target.value})

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onLoginDataSubmit = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(data.error_msg)
    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.setState({loginError: true, errorMessage: data.error_msg})
    }
  }

  render() {
    const {loginError, errorMessage} = this.state
    return (
      <div className="login-form-page">
        <img
          className="login-page-logo-desktop-view"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form onSubmit={this.onLoginDataSubmit} className="login-form">
          <div className="internal-form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="login-form-logo"
              alt="website logo"
            />
            <img
              className="login-page-logo-mobile-view"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
            />
            <div className="label-input-container">
              <label htmlFor="username" className="input-label">
                USERNAME
              </label>
              <input
                onChange={this.onUsernameInput}
                placeholder="Username"
                id="username"
                type="text"
                className="input-field"
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="password" className="input-label">
                PASSWORD
              </label>
              <input
                onChange={this.onPasswordInput}
                placeholder="Password"
                id="password"
                type="password"
                className="input-field"
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            {loginError && (
              <p className="error-message">{`*${errorMessage}`}</p>
            )}
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
