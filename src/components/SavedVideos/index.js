import VideoContext from '../../context/VideoContext'
import ThemeContext from '../../context/ThemeContext'

import RouteLayout from '../RouteLayout'
import SavedVideoItem from '../SavedVideoItem'

import {
  SavedVideosContainer,
  VideosList,
  EmptyViewContainer,
  EmptyViewImage,
  EmptyViewHeading,
  EmptyViewDescription,
  Header,
  Heading,
  IconContainer,
  TrendingIcon,
} from './styledComponents'

const SavedVideos = () => {
  const renderEmptyView = darkMode => (
    <EmptyViewContainer>
      <EmptyViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <EmptyViewHeading darkMode={darkMode}>
        No saved videos found
      </EmptyViewHeading>
      <EmptyViewDescription darkMode={darkMode}>
        You can save your videos while watching them
      </EmptyViewDescription>
    </EmptyViewContainer>
  )

  const renderSavedVideosList = darkMode => (
    <VideoContext.Consumer>
      {value => {
        const {savedVideos} = value

        if (savedVideos.length === 0) {
          return renderEmptyView(darkMode)
        }

        return (
          <>
            <Header darkMode={darkMode}>
              <IconContainer darkMode={darkMode}>
                <TrendingIcon />
              </IconContainer>
              <Heading darkMode={darkMode}>Saved Videos</Heading>
            </Header>
            <VideosList>
              {savedVideos.map(eachVideo => (
                <SavedVideoItem key={eachVideo.id} videoDetails={eachVideo} />
              ))}
            </VideosList>
          </>
        )
      }}
    </VideoContext.Consumer>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <RouteLayout>
            <SavedVideosContainer darkMode={darkMode} data-testid="savedVideos">
              {renderSavedVideosList(darkMode)}
            </SavedVideosContainer>
          </RouteLayout>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
