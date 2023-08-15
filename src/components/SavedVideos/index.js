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
  const renderEmptyView = $darkmode => (
    <EmptyViewContainer>
      <EmptyViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <EmptyViewHeading $darkmode={$darkmode}>
        No saved videos found
      </EmptyViewHeading>
      <EmptyViewDescription $darkmode={$darkmode}>
        You can save your videos while watching them
      </EmptyViewDescription>
    </EmptyViewContainer>
  )

  const renderSavedVideosList = $darkmode => (
    <VideoContext.Consumer>
      {value => {
        const {savedVideos} = value

        if (savedVideos.length === 0) {
          return renderEmptyView($darkmode)
        }

        return (
          <>
            <Header $darkmode={$darkmode}>
              <IconContainer $darkmode={$darkmode}>
                <TrendingIcon />
              </IconContainer>
              <Heading $darkmode={$darkmode}>Saved Videos</Heading>
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
        const {$darkmode} = value

        return (
          <RouteLayout>
            <SavedVideosContainer
              $darkmode={$darkmode}
              data-testid="savedVideos"
            >
              {renderSavedVideosList($darkmode)}
            </SavedVideosContainer>
          </RouteLayout>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
