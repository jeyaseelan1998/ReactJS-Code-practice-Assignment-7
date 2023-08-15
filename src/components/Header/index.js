import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import {
  DesktopHeaderItems,
  HeaderContainer,
  HeaderItem,
  NavLink,
  WebsiteLogo,
  Button,
  ProfileImage,
  MoonIcon,
  SunIcon,
  MobileHeaderItems,
  HamburgerMenuIcon,
  LogoutIcon,
  StyledPopup,
  CloseButton,
  CloseIcon,
  StyledLogoutPopup,
  AlertText,
  ButtonGroup,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

import SideBar from '../SideBar'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode, toggleTheme} = value

        const websiteLogoUrl = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const LogoutPopup = close => (
          <>
            <AlertText darkMode={darkMode}>
              Are you sure, you want to logout?
            </AlertText>
            <ButtonGroup>
              <CancelButton type="button" onClick={close}>
                Cancel
              </CancelButton>
              <ConfirmButton type="button" onClick={onLogout}>
                Confirm
              </ConfirmButton>
            </ButtonGroup>
          </>
        )

        return (
          <HeaderContainer darkMode={darkMode}>
            <NavLink to="/">
              <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
            </NavLink>

            <DesktopHeaderItems>
              <HeaderItem>
                <Button type="button" onClick={toggleTheme} data-testid="theme">
                  {darkMode ? <SunIcon /> : <MoonIcon />}
                </Button>
              </HeaderItem>
              <HeaderItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </HeaderItem>
              <HeaderItem>
                <StyledLogoutPopup
                  trigger={
                    <Button type="button" outline>
                      Logout
                    </Button>
                  }
                  modal
                  darkMode={darkMode}
                >
                  {LogoutPopup}
                </StyledLogoutPopup>
              </HeaderItem>
            </DesktopHeaderItems>

            <MobileHeaderItems>
              <HeaderItem>
                <Button type="button" onClick={toggleTheme} data-testid="theme">
                  {darkMode ? <SunIcon /> : <MoonIcon />}
                </Button>
              </HeaderItem>
              <HeaderItem>
                <StyledPopup
                  trigger={
                    <Button type="button">
                      <HamburgerMenuIcon darkMode={darkMode} />
                    </Button>
                  }
                  modal
                  darkMode={darkMode}
                >
                  {close => (
                    <div className="sidebar-model-container">
                      <CloseButton type="button" onClick={close}>
                        <CloseIcon darkMode={darkMode} />
                      </CloseButton>
                      <SideBar />
                    </div>
                  )}
                </StyledPopup>
              </HeaderItem>
              <HeaderItem>
                <StyledLogoutPopup
                  trigger={
                    <Button type="button">
                      <LogoutIcon darkMode={darkMode} />
                    </Button>
                  }
                  modal
                  darkMode={darkMode}
                >
                  {LogoutPopup}
                </StyledLogoutPopup>
              </HeaderItem>
            </MobileHeaderItems>
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
