import {withRouter} from 'react-router-dom'
import {
  SideBarContainer,
  SideBarNavItemsList,
  NavItem,
  NavLink,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  PlaylistAddIcon,
  Footer,
  FooterHeading,
  FooterLogoGroup,
  FooterLogo,
  FooterDescription,
  NavLabel,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const SideBar = props => {
  const {
    match: {path},
  } = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <SideBarContainer darkMode={darkMode}>
            <SideBarNavItemsList>
              <NavItem darkMode={darkMode} active={path === '/'}>
                <NavLink to="/" active={path === '/'}>
                  <HomeIcon active={path === '/'} darkMode={darkMode} />
                  <NavLabel darkMode={darkMode}>Home</NavLabel>
                </NavLink>
              </NavItem>
              <NavItem darkMode={darkMode} active={path === '/trending'}>
                <NavLink to="/trending" active={path === '/trending'}>
                  <TrendingIcon
                    active={path === '/trending'}
                    darkMode={darkMode}
                  />
                  <NavLabel darkMode={darkMode}>Trending</NavLabel>
                </NavLink>
              </NavItem>
              <NavItem darkMode={darkMode} active={path === '/gaming'}>
                <NavLink to="/gaming" active={path === '/gaming'}>
                  <GamingIcon active={path === '/gaming'} darkMode={darkMode} />
                  <NavLabel darkMode={darkMode}>Gaming</NavLabel>
                </NavLink>
              </NavItem>
              <NavItem darkMode={darkMode} active={path === '/saved-videos'}>
                <NavLink to="/saved-videos" active={path === '/saved-videos'}>
                  <PlaylistAddIcon
                    active={path === '/saved-videos'}
                    darkMode={darkMode}
                  />
                  <NavLabel darkMode={darkMode}>Saved videos</NavLabel>
                </NavLink>
              </NavItem>
            </SideBarNavItemsList>

            <Footer>
              <FooterHeading darkMode={darkMode}>CONTACT US</FooterHeading>
              <FooterLogoGroup>
                <FooterLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />

                <FooterLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <FooterLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </FooterLogoGroup>
              <FooterDescription darkMode={darkMode}>
                Enjoy! Now to see your channels and recommendations!
              </FooterDescription>
            </Footer>
          </SideBarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(SideBar)
