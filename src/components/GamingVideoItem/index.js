import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemList,
  VideoLink,
  VideoThumbnail,
  VideoDetails,
  VideoName,
  Views,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <VideoItemList>
            <VideoLink to={`/videos/${id}`}>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <VideoName darkMode={darkMode}>{title}</VideoName>

                <Views>{viewCount} Watching Worldwide</Views>
              </VideoDetails>
            </VideoLink>
          </VideoItemList>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem
