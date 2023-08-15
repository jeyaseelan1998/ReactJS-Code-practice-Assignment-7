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
        const {$darkmode} = value

        return (
          <SideBarContainer $darkmode={$darkmode}>
            <SideBarNavItemsList>
              <NavItem $darkmode={$darkmode} $active={path === '/'}>
                <NavLink to="/" $active={path === '/'}>
                  <HomeIcon $active={path === '/'} $darkmode={$darkmode} />
                  <NavLabel $darkmode={$darkmode}>Home</NavLabel>
                </NavLink>
              </NavItem>
              <NavItem $darkmode={$darkmode} $active={path === '/trending'}>
                <NavLink to="/trending" $active={path === '/trending'}>
                  <TrendingIcon
                    $active={path === '/trending'}
                    $darkmode={$darkmode}
                  />
                  <NavLabel $darkmode={$darkmode}>Trending</NavLabel>
                </NavLink>
              </NavItem>
              <NavItem $darkmode={$darkmode} $active={path === '/gaming'}>
                <NavLink to="/gaming" $active={path === '/gaming'}>
                  <GamingIcon
                    $active={path === '/gaming'}
                    $darkmode={$darkmode}
                  />
                  <NavLabel $darkmode={$darkmode}>Gaming</NavLabel>
                </NavLink>
              </NavItem>
              <NavItem $darkmode={$darkmode} $active={path === '/saved-videos'}>
                <NavLink to="/saved-videos" $active={path === '/saved-videos'}>
                  <PlaylistAddIcon
                    $active={path === '/saved-videos'}
                    $darkmode={$darkmode}
                  />
                  <NavLabel $darkmode={$darkmode}>Saved videos</NavLabel>
                </NavLink>
              </NavItem>
            </SideBarNavItemsList>

            <Footer>
              <FooterHeading $darkmode={$darkmode}>CONTACT US</FooterHeading>
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
              <FooterDescription $darkmode={$darkmode}>
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
