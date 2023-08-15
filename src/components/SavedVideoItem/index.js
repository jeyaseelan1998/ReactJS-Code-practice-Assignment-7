import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemList,
  VideoLink,
  VideoThumbnail,
  VideoDetails,
  VideoName,
  ChannelName,
  Statistics,
  DotIcon,
} from './styledComponents'

const SavedVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {$darkmode} = value

        return (
          <VideoItemList>
            <VideoLink to={`/videos/${id}`}>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <VideoName $darkmode={$darkmode}>{title}</VideoName>
                <ChannelName>{channel.name}</ChannelName>
                <Statistics>
                  <ChannelName>{viewCount} views</ChannelName>
                  <DotIcon />
                  <ChannelName>
                    {formatDistanceToNow(new Date(publishedAt))} ago
                  </ChannelName>
                </Statistics>
              </VideoDetails>
            </VideoLink>
          </VideoItemList>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoItem
