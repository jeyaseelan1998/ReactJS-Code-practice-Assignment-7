import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'

import RouteLayout from '../RouteLayout'
import SavedVideoItem from '../SavedVideoItem'

import {
  TrendingContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryButton,
  Header,
  IconContainer,
  TrendingIcon,
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
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getUpdatedData = videos =>
    videos.map(video => ({
      id: video.id,
      title: video.title,
      thumbnailUrl: video.thumbnail_url,
      viewCount: video.view_count,
      publishedAt: video.published_at,
      channel: {
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
      },
    }))

  getTrendingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.pending})

    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
        trendingVideosList: updatedData,
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

  renderFailueView = darkMode => {
    const imageUrl = darkMode
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailureViewContainer>
        <FailureViewImage src={imageUrl} alt="failure view" />
        <FailureViewHeading darkMode={darkMode}>
          Oops! Something Went Wrong
        </FailureViewHeading>
        <FailureViewDescription darkMode={darkMode}>
          We are having some trouble to complete your request. Please try again.
        </FailureViewDescription>
        <RetryButton type="button" onClick={this.getTrendingVideosList}>
          Retry
        </RetryButton>
      </FailureViewContainer>
    )
  }

  renderSuccessView = darkMode => {
    const {trendingVideosList} = this.state

    return (
      <>
        <Header darkMode={darkMode}>
          <IconContainer darkMode={darkMode}>
            <TrendingIcon />
          </IconContainer>
          <Heading darkMode={darkMode}>Trending Videos</Heading>
        </Header>
        <VideosList>
          {trendingVideosList.map(eachVideo => (
            <SavedVideoItem key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </VideosList>
      </>
    )
  }

  renderViews = darkMode => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView(darkMode)
      case apiStatusConstants.failure:
        return this.renderFailueView(darkMode)
      default:
        return this.renderLoadingView()
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <RouteLayout>
              <TrendingContainer darkMode={darkMode} data-testid="trending">
                {this.renderViews(darkMode)}
              </TrendingContainer>
            </RouteLayout>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
