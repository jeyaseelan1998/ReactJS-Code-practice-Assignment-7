import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'
import RouteLayout from '../RouteLayout'
import VideoItem from '../VideoItem'

import {
  HomeContainer,
  BannerBackgroundImage,
  WebsiteLogo,
  Button,
  CloseIcon,
  GetItNowButton,
  BannerDescription,
  VideosListContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryButton,
  SearchInputContainer,
  SearchButton,
  SearchInput,
  SearchIcon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchInput: '',
    showBanner: true,
  }

  componentDidMount() {
    this.getVideosList()
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

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.pending})

    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  closeTheBanner = () => {
    this.setState({showBanner: false})
  }

  renderEmptyView = $darkmode => {
    const imageUrl =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'

    return (
      <FailureViewContainer>
        <FailureViewImage src={imageUrl} alt="no videos" />
        <FailureViewHeading $darkmode={$darkmode}>
          No Search results found
        </FailureViewHeading>
        <FailureViewDescription $darkmode={$darkmode}>
          Try different key words or remove search filter
        </FailureViewDescription>
        <RetryButton type="button" onClick={this.getVideosList}>
          Retry
        </RetryButton>
      </FailureViewContainer>
    )
  }

  renderSuccessView = $darkmode => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.renderEmptyView($darkmode)
    }

    return (
      <VideosListContainer>
        {videosList.map(eachVideo => (
          <VideoItem key={eachVideo.id} videoItemDetails={eachVideo} />
        ))}
      </VideosListContainer>
    )
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
        <RetryButton type="button" onClick={this.getVideosList}>
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

  renderBanner = () => (
    <BannerBackgroundImage data-testid="banner">
      <div>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerDescription>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerDescription>
        <GetItNowButton type="button">GET IT NOW</GetItNowButton>
      </div>
      <Button type="button" data-testid="close" onClick={this.closeTheBanner}>
        <CloseIcon />
      </Button>
    </BannerBackgroundImage>
  )

  renderSearchBar = $darkmode => {
    const {searchInput} = this.state

    const onChangeSearchInput = event => {
      this.setState({searchInput: event.target.value})
    }

    return (
      <SearchInputContainer>
        <SearchInput
          type="search"
          value={searchInput}
          onChange={onChangeSearchInput}
          $darkmode={$darkmode}
        />
        <SearchButton
          type="button"
          onClick={this.getVideosList}
          data-testid="searchButton"
          $darkmode={$darkmode}
        >
          <SearchIcon $darkmode={$darkmode} />
        </SearchButton>
      </SearchInputContainer>
    )
  }

  render() {
    return (
      <RouteLayout>
        <ThemeContext.Consumer>
          {value => {
            const {$darkmode} = value
            const {showBanner} = this.state

            return (
              <HomeContainer $darkmode={$darkmode} data-testid="home">
                {showBanner && this.renderBanner()}
                {this.renderSearchBar($darkmode)}
                {this.renderViews($darkmode)}
              </HomeContainer>
            )
          }}
        </ThemeContext.Consumer>
      </RouteLayout>
    )
  }
}

export default Home
