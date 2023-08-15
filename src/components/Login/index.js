import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  Button,
  CheckboxInput,
  CheckboxInputContainer,
  CheckboxInputLabel,
  ErrorMsg,
  InputField,
  LabelName,
  LoginForm,
  LoginRouteContainer,
  WebsiteLogo,
} from './styledComponents'

const initialUserDetails = {
  username: '',
  password: '',
}

class Login extends Component {
  state = {
    showPassword: false,
    showError: false,
    errorMsg: '',
    ...initialUserDetails,
  }

  onChangeTextInput = event => {
    const {id, value} = event.target
    this.setState({[id]: value})
  }

  onTogglePasswordVisibility = event => {
    const {checked} = event.target
    this.setState({showPassword: checked})
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {$darkmode} = value
          const {
            showPassword,
            showError,
            errorMsg,
            username,
            password,
          } = this.state

          const websiteLogoUrl = $darkmode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginRouteContainer $darkmode={$darkmode}>
              <LoginForm $darkmode={$darkmode} onSubmit={this.onSubmitLogin}>
                <WebsiteLogo alt="website logo" src={websiteLogoUrl} />

                <LabelName htmlFor="username" $darkmode={$darkmode}>
                  USERNAME
                </LabelName>
                <InputField
                  type="text"
                  value={username}
                  id="username"
                  onChange={this.onChangeTextInput}
                  $darkmode={$darkmode}
                  placeholder="Username"
                />

                <LabelName htmlFor="password" $darkmode={$darkmode}>
                  PASSWORD
                </LabelName>
                <InputField
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  id="password"
                  onChange={this.onChangeTextInput}
                  $darkmode={$darkmode}
                  placeholder="Password"
                />

                <CheckboxInputContainer>
                  <CheckboxInput
                    id="checkboxInput"
                    type="checkbox"
                    onChange={this.onTogglePasswordVisibility}
                  />
                  <CheckboxInputLabel
                    $darkmode={$darkmode}
                    htmlFor="checkboxInput"
                  >
                    Show Password
                  </CheckboxInputLabel>
                </CheckboxInputContainer>

                <Button type="submit">Login</Button>
                {showError && (
                  <ErrorMsg $darkmode={$darkmode}>*{errorMsg}</ErrorMsg>
                )}
              </LoginForm>
            </LoginRouteContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
