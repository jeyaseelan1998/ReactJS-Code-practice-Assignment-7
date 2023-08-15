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

    if (response.ok === true) {
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

  renderEmptyView = darkMode => {
    const imageUrl =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'

    return (
      <FailureViewContainer>
        <FailureViewImage src={imageUrl} alt="no videos" />
        <FailureViewHeading darkMode={darkMode}>
          No Search results found
        </FailureViewHeading>
        <FailureViewDescription darkMode={darkMode}>
          Try different key words or remove search filter
        </FailureViewDescription>
        <RetryButton type="button" onClick={this.getVideosList}>
          Retry
        </RetryButton>
      </FailureViewContainer>
    )
  }

  renderSuccessView = darkMode => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.renderEmptyView(darkMode)
    }

    return (
      <VideosListContainer>
        {videosList.map(eachVideo => (
          <VideoItem key={eachVideo.id} videoItemDetails={eachVideo} />
        ))}
      </VideosListContainer>
    )
  }

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

  renderSearchBar = darkMode => {
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
          darkMode={darkMode}
        />
        <SearchButton
          type="button"
          onClick={this.getVideosList}
          data-testid="searchButton"
          darkMode={darkMode}
        >
          <SearchIcon darkMode={darkMode} />
        </SearchButton>
      </SearchInputContainer>
    )
  }

  render() {
    return (
      <RouteLayout>
        <ThemeContext.Consumer>
          {value => {
            const {darkMode} = value
            const {showBanner} = this.state

            return (
              <HomeContainer darkMode={darkMode} data-testid="home">
                {showBanner && this.renderBanner()}
                {this.renderSearchBar(darkMode)}
                {this.renderViews(darkMode)}
              </HomeContainer>
            )
          }}
        </ThemeContext.Consumer>
      </RouteLayout>
    )
  }
}

export default Home
