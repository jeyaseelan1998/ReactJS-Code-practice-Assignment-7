import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'

import ThemeContext from './context/ThemeContext'
import VideoContext from './context/VideoContext'

import './App.css'

const reactionTypesConstants = {
  liked: 'LIKED',
  disliked: 'DISLIKED',
  initial: 'NONE',
}

class App extends Component {
  state = {
    darkMode: false,
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  onSaveVideo = videoItemDetails => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, videoItemDetails],
    }))
  }

  onRemoveVideo = id => {
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(video => video.id !== id),
    }))
  }

  onLikeVideo = id => {
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.map(video =>
        video.id === id
          ? {
              ...video,
              reactionType:
                video.reactionType === reactionTypesConstants.liked
                  ? reactionTypesConstants.initial
                  : reactionTypesConstants.liked,
            }
          : video,
      ),
    }))
  }

  onDisLikeVideo = id => {
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.map(video =>
        video.id === id
          ? {
              ...video,
              reactionType:
                video.reactionType === reactionTypesConstants.disliked
                  ? reactionTypesConstants.initial
                  : reactionTypesConstants.disliked,
            }
          : video,
      ),
    }))
  }

  render() {
    const {darkMode, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          darkMode,
          toggleTheme: this.toggleTheme,
        }}
      >
        <VideoContext.Provider
          value={{
            savedVideos,
            onSaveVideo: this.onSaveVideo,
            onRemoveVideo: this.onRemoveVideo,
            onLikeVideo: this.onLikeVideo,
            onDisLikeVideo: this.onDisLikeVideo,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </VideoContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
