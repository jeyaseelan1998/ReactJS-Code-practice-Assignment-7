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
        const {$darkmode, toggleTheme} = value

        const websiteLogoUrl = $darkmode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const LogoutPopup = close => (
          <>
            <AlertText $darkmode={$darkmode}>
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
          <HeaderContainer $darkmode={$darkmode}>
            <NavLink to="/">
              <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
            </NavLink>

            <DesktopHeaderItems>
              <HeaderItem>
                <Button type="button" onClick={toggleTheme} data-testid="theme">
                  {$darkmode ? <SunIcon /> : <MoonIcon />}
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
                  $darkmode={$darkmode}
                >
                  {LogoutPopup}
                </StyledLogoutPopup>
              </HeaderItem>
            </DesktopHeaderItems>

            <MobileHeaderItems>
              <HeaderItem>
                <Button type="button" onClick={toggleTheme} data-testid="theme">
                  {$darkmode ? <SunIcon /> : <MoonIcon />}
                </Button>
              </HeaderItem>
              <HeaderItem>
                <StyledPopup
                  trigger={
                    <Button type="button">
                      <HamburgerMenuIcon $darkmode={$darkmode} />
                    </Button>
                  }
                  modal
                  $darkmode={$darkmode}
                >
                  {close => (
                    <div className="sidebar-model-container">
                      <CloseButton type="button" onClick={close}>
                        <CloseIcon $darkmode={$darkmode} />
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
                      <LogoutIcon $darkmode={$darkmode} />
                    </Button>
                  }
                  modal
                  $darkmode={$darkmode}
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
