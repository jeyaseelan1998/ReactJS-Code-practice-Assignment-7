import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'

import RouteLayout from '../RouteLayout'
import GamingVideoItem from '../GamingVideoItem'

import {
  TrendingContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryButton,
  Header,
  IconContainer,
  GamingIcon,
  Heading,
  VideosList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideosList()
  }

  getUpdatedData = videos =>
    videos.map(video => ({
      id: video.id,
      title: video.title,
      thumbnailUrl: video.thumbnail_url,
      viewCount: video.view_count,
    }))

  getGamingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.pending})

    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updatedData = this.getUpdatedData(data.videos)
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

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
        <RetryButton type="button" onClick={this.getGamingVideosList}>
          Retry
        </RetryButton>
      </FailureViewContainer>
    )
  }

  renderSuccessView = $darkmode => {
    const {gamingVideosList} = this.state

    return (
      <>
        <Header $darkmode={$darkmode}>
          <IconContainer $darkmode={$darkmode}>
            <GamingIcon />
          </IconContainer>
          <Heading $darkmode={$darkmode}>Gaming</Heading>
        </Header>
        <VideosList>
          {gamingVideosList.map(eachVideo => (
            <GamingVideoItem key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </VideosList>
      </>
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
              <TrendingContainer $darkmode={$darkmode} data-testid="gaming">
                {this.renderViews($darkmode)}
              </TrendingContainer>
            </RouteLayout>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
