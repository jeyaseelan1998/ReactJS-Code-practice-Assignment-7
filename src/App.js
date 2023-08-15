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

class App extends Component {
  state = {
    $darkmode: false,
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({$darkmode: !prevState.$darkmode}))
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

  render() {
    const {$darkmode, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          $darkmode,
          toggleTheme: this.toggleTheme,
        }}
      >
        <VideoContext.Provider
          value={{
            savedVideos,
            onSaveVideo: this.onSaveVideo,
            onRemoveVideo: this.onRemoveVideo,
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
