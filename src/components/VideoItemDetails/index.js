import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import RouteLayout from '../RouteLayout'

import ThemeContext from '../../context/ThemeContext'
import VideoContext from '../../context/VideoContext'

import {
  VideoItemDetailContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryButton,
  ChannelName,
  StatisticsContainer,
  Statistics,
  StatisticsText,
  DotIcon,
  ChannelLogo,
  VideoName,
  Separator,
  ChannelLogoDescription,
  VideoDescription,
  Button,
  PlaylistAddIcon,
  LikeIcon,
  DislikeIcon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

const reactionTypesConstants = {
  liked: 'LIKED',
  disliked: 'DISLIKED',
  initial: 'NONE',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetails: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getUpdatedVideoDetails = videoDetails => ({
    id: videoDetails.id,
    title: videoDetails.title,
    videoUrl: videoDetails.video_url,
    thumbnailUrl: videoDetails.thumbnail_url,
    channel: {
      name: videoDetails.channel.name,
      profileImageUrl: videoDetails.channel.profile_image_url,
      subscriberCount: videoDetails.channel.subscriber_count,
    },
    viewCount: videoDetails.view_count,
    publishedAt: videoDetails.published_at,
    description: videoDetails.description,
    reactionType: reactionTypesConstants.initial,
  })

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.pending})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updatedVideoItemDetails = this.getUpdatedVideoDetails(
        data.video_details,
      )
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoItemDetails: updatedVideoItemDetails,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = $darkmode => {
    const imageUrl = $darkmode
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailureViewContainer>
        <FailureViewImage src={imageUrl} alt="failure view" />
        <FailureViewHeading $darkmode={$darkmode}>
          Oops! Something Went Wrong
        </FailureViewHeading>
        <FailureViewDescription $darkmode={$darkmode}>
          We are having some trouble to complete your request. Please try again.
        </FailureViewDescription>
        <RetryButton type="button" onClick={this.getVideoItemDetails}>
          Retry
        </RetryButton>
      </FailureViewContainer>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderSuccessView = $darkmode => {
    const {videoItemDetails} = this.state
    const {
      id,
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
      reactionType,
    } = videoItemDetails

    return (
      <VideoContext.Consumer>
        {value => {
          const {onRemoveVideo, onSaveVideo, savedVideos} = value

          const isAlreadyVideoSaved =
            savedVideos.find(eachVideo => eachVideo.id === id) !== undefined

          const onClickSaveVideo = () => {
            if (!isAlreadyVideoSaved) {
              onSaveVideo(videoItemDetails)
            } else {
              onRemoveVideo(id)
            }
          }

          const onClickLikeButton = () => {
            this.setState(prevState => ({
              videoItemDetails: {
                ...prevState.videoItemDetails,
                reactionType:
                  prevState.videoItemDetails.reactionType ===
                  reactionTypesConstants.liked
                    ? reactionTypesConstants.initial
                    : reactionTypesConstants.liked,
              },
            }))
          }

          const onClickDislikeButtom = () => {
            this.setState(prevState => ({
              videoItemDetails: {
                ...prevState.videoItemDetails,
                reactionType:
                  prevState.videoItemDetails.reactionType ===
                  reactionTypesConstants.disliked
                    ? reactionTypesConstants.initial
                    : reactionTypesConstants.disliked,
              },
            }))
          }

          return (
            <div className="success-view">
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="450px"
                controls
              />
              <VideoName $darkmode={$darkmode}>{title}</VideoName>
              <StatisticsContainer>
                <Statistics>
                  <StatisticsText>{viewCount}views</StatisticsText>
                  <DotIcon />
                  <StatisticsText>
                    {formatDistanceToNow(new Date(publishedAt))} ago
                  </StatisticsText>
                </Statistics>

                <Statistics>
                  <Button
                    type="button"
                    active={reactionType === reactionTypesConstants.liked}
                    onClick={onClickLikeButton}
                  >
                    <LikeIcon />
                    Like
                  </Button>
                  <Button
                    type="button"
                    active={reactionType === reactionTypesConstants.disliked}
                    onClick={onClickDislikeButtom}
                  >
                    <DislikeIcon />
                    Dislike
                  </Button>
                  <Button
                    type="button"
                    active={isAlreadyVideoSaved}
                    onClick={onClickSaveVideo}
                  >
                    <PlaylistAddIcon />
                    {isAlreadyVideoSaved ? 'Saved' : 'Save'}
                  </Button>
                </Statistics>
              </StatisticsContainer>

              <Separator />

              <ChannelLogoDescription>
                <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />

                <div>
                  <ChannelName $darkmode={$darkmode}>
                    {channel.name}
                  </ChannelName>
                  <StatisticsText>
                    {channel.subscriberCount} subscribers
                  </StatisticsText>
                  <VideoDescription>{description}</VideoDescription>
                </div>
              </ChannelLogoDescription>
            </div>
          )
        }}
      </VideoContext.Consumer>
    )
  }

  renderViews = $darkmode => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView($darkmode)
      case apiStatusConstants.failure:
        return this.renderFailureView($darkmode)
      default:
        return this.renderLoadingView()
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {$darkmode} = value

          return (
            <RouteLayout>
              <VideoItemDetailContainer
                $darkmode={$darkmode}
                data-testid="videoItemDetails"
              >
                {this.renderViews($darkmode)}
              </VideoItemDetailContainer>
            </RouteLayout>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
