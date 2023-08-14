import RouteLayout from '../RouteLayout'

import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkMode} = value
      const imageUrl = `https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-${
        darkMode ? 'dark' : 'light'
      }-theme-img.png`

      return (
        <RouteLayout>
          <NotFoundContainer darkMode={darkMode}>
            <NotFoundImage src={imageUrl} alt="not found" />
            <NotFoundHeading darkMode={darkMode}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundDescription>
              We are sorry, the page you requested could not be found.
            </NotFoundDescription>
          </NotFoundContainer>
        </RouteLayout>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
