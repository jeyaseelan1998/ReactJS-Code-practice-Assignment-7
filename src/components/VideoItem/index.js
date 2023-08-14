import {formatDistanceToNow} from 'date-fns'

import {
  VideoItemList,
  VideoLink,
  VideoThumbnail,
  VideoDetails,
  ChannelLogo,
  VideoName,
  ChannelName,
  DotIcon,
  Statistics,
  Button,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const VideoItem = props => {
  const {videoItemDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoItemDetails

  const getVideoName = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode} = value

        return <VideoName darkMode={darkMode}>{title}</VideoName>
      }}
    </ThemeContext.Consumer>
  )

  return (
    <VideoItemList>
      <VideoLink to={`/videos/${id}`}>
        <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetails>
          <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
          <div>
            {getVideoName()}
            <ChannelName>{channel.name}</ChannelName>

            <Statistics>
              <ChannelName>{viewCount}views</ChannelName>
              <DotIcon />
              <ChannelName>
                {formatDistanceToNow(new Date(publishedAt))}
              </ChannelName>
            </Statistics>
          </div>
        </VideoDetails>
      </VideoLink>
    </VideoItemList>
  )
}

export default VideoItem